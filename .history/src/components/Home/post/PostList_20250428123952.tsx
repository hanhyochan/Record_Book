import WriteBtn from '../../common/button/WriteBtn';
import useUiState from '../../../store/useUiState';
import { useEffect, useState } from 'react';
import { postGetApi } from '../../../api/post';
import PostListTitleWeb from './PostListTitleWeb';
import PostListTitleMobile from './PostListTitleMobile';
import ReactPaginate from 'react-js-pagination';
import { postType } from '../../../types/post';
import useWindowWidth from '../../../hooks/useWindowWidth';

const PostList = () => {
  const togglePostWritePopup = useUiState(state => state.togglePostWritePopup);
  const [postListContents, setPostListContents] = useState<postType[]>([]);
  const [totalItemCount, setTotalItemCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const windowWidth = useWindowWidth();
  const itemsPerPage = 10;

  const openWriteModal = () => {
    togglePostWritePopup();
  };

  const fetchPosts = async () => {
    try {
      const response = await postGetApi(currentPage, itemsPerPage);
      console.log(response);
      const postList = response.data.items;
      const totalItemCount = response.data.meta.totalItems;
      setTotalItemCount(totalItemCount);
      setPostListContents(postList);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [currentPage]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {windowWidth > 642 ? (
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
              <PostListTitleWeb post={post} />
            </div>
          ))}
          <div className="flex justify-center items-center p-[2.4rem]">
            <ReactPaginate
              activePage={currentPage}
              itemsCountPerPage={itemsPerPage}
              totalItemsCount={totalItemCount}
              pageRangeDisplayed={5}
              prevPageText={'<'}
              nextPageText={'>'}
              firstPageText={''}
              lastPageText={''}
              onChange={handlePageChange}
              containerClassName="pagination"
            />
          </div>
        </div>
      ) : (
        <div className="w-[100%] h-[100%] flex flex-col">
          <div className="w-[100%] h-[8rem] flex items-center">
            <p className="text-[2rem] font-bold leading-[160%] tracking-[-0.3%]">게시판</p>
          </div>
          {postListContents.map(post => (
            <div
              key={post.id}
              className="flex items-center justify-between h-[8rem] border-b-[0.1rem] border-[#EEEFF1]"
            >
              <PostListTitleMobile post={post} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default PostList;
