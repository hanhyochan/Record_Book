import WriteBtn from '../common/button/WriteBtn';
import useUiState from '../../store/useUiState';
import { useEffect } from 'react';
import { postGetApi } from '../../api/post';
import { useState } from 'react';

const PostList = () => {
  const togglePostWritePopup = useUiState(state => state.togglePostWritePopup);
  const [postListContents, setPostListContents] = useState<postType[]>([]);

  const openWriteModal = () => {
    togglePostWritePopup();
  };

  useEffect(() => {
    const fetchAllPosts = async () => {
      let page = 1;
      const limit = 10;

      while (true) {
        try {
          const response = await postGetApi(page, limit);
          const postList = response.data.items;
          setPostListContents(postList);
          // 여기 res값을 가공해서 객체형태로 만든후 map돌려서 똑같은 놈들 만들고 페이지네이션 ㄱ
          const posts = response.data?.posts || response.data || [];

          if (!posts.length) {
            // console.log(`페이지 ${page}: 데이터 없음. 요청 종료.`);
            break;
          }

          page++;
        } catch (error) {
          console.error(`페이지 ${page} 요청 중 에러 발생:`, error);
          break;
        }
      }
    };

    fetchAllPosts();
  }, []);
  console.log(postListContents);

  type postType = {
    commentCount: number;
    createdAt: string;
    id: string;
    isAuthor: boolean;
    title: string;
    updatedAt: string;
    viewCount: number;
  };

  return (
    <div className="bg-white w-[100%] h-[65.2rem] rounded-[1.2rem] flex flex-col">
      <div className="flex justify-between items-center p-[2.4rem] border-b border-[0.1rem] border-[#EEEFF1]">
        <p className="text-[2rem] font-bold leading-[160%] tracking-[-0.3%]">게시판</p>
        <WriteBtn onClick={openWriteModal}>글쓰기</WriteBtn>
      </div>
      {postListContents.map(post => (
        <div
          key={post.id}
          className="flex items-center h-[5.9rem] px-[1.6rem] py-[2.4rem] border-b border-[0.1rem] border-[#EEEFF1]"
        >
          <div className="w-[80%] h-[100%] flex items-center">
            <p className="truncate">{post.title}</p>
          </div>
          <p>{post.createdAt}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
