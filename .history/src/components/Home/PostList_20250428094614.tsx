import WriteBtn from '../common/button/WriteBtn';
import useUiState from '../../store/useUiState';
import { useEffect, useState } from 'react';
import { postGetApi } from '../../api/post';

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

          const posts = response.data?.posts || response.data || [];

          if (!posts.length) {
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

  // 날짜 포맷 함수
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear().toString().slice(2, 4);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

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
    <div className="bg-white w-[100%] h-[100%] rounded-[1.2rem] flex flex-col">
      <div className="flex justify-between items-center p-[2.4rem] border-b border-[0.1rem] border-[#EEEFF1]">
        <p className="text-[2rem] font-bold leading-[160%] tracking-[-0.3%]">게시판</p>
        <WriteBtn onClick={openWriteModal}>글쓰기</WriteBtn>
      </div>
      {postListContents.map(post => (
        <div
          key={post.id}
          className="flex items-center justify-between h-[5.9rem] px-[1.6rem] py-[2.4rem] border-b border-[0.1rem] border-[#EEEFF1]"
        >
          <div className="w-[80%] h-[100%] flex items-center border">
            <p className="truncate">{post.title}</p>
          </div>
          <div className="flex border">
            <p className="text-[1.6rem] font-regular font-[#A7A9B4]">
              {formatDate(post.createdAt)}
            </p>
            <div className="flex gap-[0.2rem]">
              <img src="/icon/Comments.svg" alt="댓글아이콘" width="22.19" height="18" />
              <p>{post.commentCount}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
