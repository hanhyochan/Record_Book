import WriteBtn from '../../common/button/WriteBtn';
import useUiState from '../../../store/useUiState';
import { useEffect, useState } from 'react';
import { postGetApi } from '../../../api/post';
import PostListTitleWeb from './PostListTitleWeb';
import PostListTitleMobile from './PostListTitleMobile';
import ReactPaginate from 'react-js-pagination';
import { postType } from '../../../types/post';
import useWindowWidth from '../../../hooks/useWindowWidth';
import WriteBtnMobile from '../../common/button/WriteBtnMobile';

const PostList = () => {
  const togglePostWritePopup = useUiState(state => state.togglePostWritePopup);
  const [postListContents, setPostListContents] = useState<postType[]>([]);
  const [totalItemCount, setTotalItemCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const windowWidth = useWindowWidth();
  const itemsPerPage = 10;

  const openWriteModal = () => {
    togglePostWritePopup();
  };

  const fetchPosts = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await postGetApi(currentPage, itemsPerPage);
      if (response.status === 200) {
        const postList = response.data.items;
        const totalItemCount = response.data.meta.totalItems;
        setTotalItemCount(totalItemCount);
        setPostListContents(prevPosts => [...prevPosts, ...postList]); // 기존 데이터에 새 데이터 추가
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [currentPage]);

  useEffect(() => {
    if (windowWidth <= 642) {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [windowWidth]);

  return (
    <>
      {windowWidth > 642 ? (
        <div className="bg-white w-[100%] h-[100%] rounded-[1.2rem] flex flex-col">
          <div className="flex justify-between items-center p-[2.4rem] border-b border-[0.1rem] border-[#EEEFF1]">
            <p className="text-[2rem] font-bold leading-[160%] tracking-[-0.3%]">게시판</p>
            <WriteBtn onClick={openWriteModal}>글쓰기</WriteBtn>
          </div>
          {postListContents.map((post, index) => (
            <div
              key={`${post.id}-${index}`}
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
              onChange={setCurrentPage}
              containerClassName="pagination"
            />
          </div>
        </div>
      ) : (
        <>
          <WriteBtnMobile onClick={openWriteModal} className="fixed bottom-[5rem] right-[3rem]">
            <img src="/icon/Pencil.svg" alt="연필 아이콘" width="24" height="24" />
          </WriteBtnMobile>
          <div className="w-[100%] h-[100%] flex flex-col">
            <div className="w-[100%] h-[8rem] flex items-center">
              <p className="text-[2rem] font-bold leading-[160%] tracking-[-0.3%]">게시판</p>
            </div>
            {postListContents.map((post, index) => (
              <div
                key={`${post.id}-${index}`}
                className="flex items-center justify-between h-[8rem] border-b-[0.1rem] border-[#EEEFF1]"
              >
                <PostListTitleMobile post={post} />
              </div>
            ))}
            {loading && <p className="text-center py-4">Loading...</p>}
          </div>
        </>
      )}
    </>
  );
};

export default PostList;
