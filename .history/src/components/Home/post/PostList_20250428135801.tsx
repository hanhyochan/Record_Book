import useUiState from '../../../store/useUiState';
import { useEffect, useState } from 'react';
import { postGetApi } from '../../../api/post';
import PostListTitleWeb from './PostListTitleWeb';
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
        setPostListContents(prevPosts => [...prevPosts, ...postList]);
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
        <PostListTitleWeb
          postListContents={postListContents}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItemCount={totalItemCount}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        <WriteBtnMobile postListContents={postListContents} loading={loading} />
      )}
    </>
  );
};

export default PostList;
