import WriteBtn from '../../common/button/WriteBtn';
import useUiState from '../../../store/useUiState';
import { useEffect, useState } from 'react';
import { postGetApi } from '../../../api/post';
import PostListTitle from './PostListTitle';

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
          <PostListTitle post={post} />
        </div>
      ))}
    </div>
  );



export default PostList;
