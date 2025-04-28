import { postType } from '../../../types/post';
import useUiState from '../../../store/useUiState';
import WriteBtn from '../../common/button/WriteBtn';
import ReactPaginate from 'react-js-pagination';

interface PostListTitleWebProps {
  postListContents: postType[];
  currentPage: number;
  itemsPerPage: number;
  totalItemCount: number;
  setCurrentPage: (page: number) => void;
}

const PostListTitleWeb = ({
  postListContents,
  currentPage,
  itemsPerPage,
  totalItemCount,
  setCurrentPage,
}: PostListTitleWebProps) => {
  const togglePostWritePopup = useUiState(state => state.togglePostWritePopup);
  const togglePostDetailPopup = useUiState(state => state.togglePostDetailPopup);

  // 게시글 작성 팝업 오픈
  const openWritePopup = () => {
    togglePostWritePopup();
  };

  // 게시글 조회 팝업 오픈
  const openPostDetailPopup = () => {
    togglePostDetailPopup();
  };

  // 날짜 포맷 함수
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear().toString().slice(2, 4);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  return (
    <>
      <div className="bg-white w-[100%] h-[100%] rounded-[1.2rem] flex flex-col">
        <div className="flex justify-between items-center p-[2.4rem] border-b border-[0.1rem] border-[#EEEFF1]">
          <p className="text-[2rem] font-bold leading-[160%] tracking-[-0.3%]">게시판</p>
          <WriteBtn onClick={openWritePopup}>글쓰기</WriteBtn>
        </div>
        {postListContents.map((post, index) => (
          <div
            onClick={openPostDetailPopup}
            key={`${post.id}-${index}`}
            className="flex items-center justify-between h-[5.9rem] px-[1.6rem] py-[2.4rem] border-b border-[0.1rem] border-[#EEEFF1] cursor-pointer"
          >
            <div className="w-[80%] h-[100%] flex items-center">
              <p className="truncate">{post.title}</p>
            </div>
            <div className="flex gap-[1.3rem]">
              <p className="text-[1.6rem] font-regular text-[#A7A9B4]">
                {formatDate(post.createdAt)}
              </p>
              <div className="flex gap-[0.5rem]">
                <img src="/icon/Comments.svg" alt="댓글아이콘" width="22.19" height="18" />
                <p className="text-[1.6rem] font-regular text-[#A7A9B4]">{post.commentCount}</p>
              </div>
              <div className="w-[2.4rem] h-[2.4rem] bg-[#A7A9B4] rounded-[50rem]"></div>
            </div>
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
    </>
  );
};

export default PostListTitleWeb;
