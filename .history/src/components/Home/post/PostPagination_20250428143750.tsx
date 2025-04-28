import ReactPaginate from 'react-js-pagination';

interface PostPaginationProps {
  currentPage: number;
  itemsPerPage: number;
  totalItemCount: number;
  handlePageChange: (page: number) => void;
}

const PostPagination = ({
  currentPage,
  itemsPerPage,
  totalItemCount,
  handlePageChange,
}: PostPaginationProps) => {
  return (
    <div className="flex justify-center items-center p-[2.4rem] gap-[1rem]">
      <ReactPaginate
        activePage={currentPage}
        itemsCountPerPage={itemsPerPage}
        totalItemsCount={totalItemCount}
        pageRangeDisplayed={5}
        prevPageText={'<'}
        nextPageText={'>'}
        onChange={handlePageChange}
        containerClassName="pagination"
      />
    </div>
  );
};

export default PostPagination;
