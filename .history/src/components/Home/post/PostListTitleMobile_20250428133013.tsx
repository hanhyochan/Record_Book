import { postType } from '../../../types/post';

const PostListTitleMobile = ({ post }: { post: postType }) => {
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
          <WriteBtn onClick={openWriteModal}>글쓰기</WriteBtn>
        </div>
        {postListContents.map(post => (
          <div
            key={post.id}
            className="flex items-center justify-between h-[5.9rem] px-[1.6rem] py-[2.4rem] border-b border-[0.1rem] border-[#EEEFF1]"
          >
            <div className="flex flex-col gap-[1rem]">
              <p className="text-[1.6rem] font-bold leading-[160%] tracking-[-0.3%]">
                {post.title}
              </p>
              <div className="flex gap-[1.3rem]">
                <p className="text-[1.4rem] font-regular text-[#A7A9B4]">
                  {formatDate(post.createdAt)}
                </p>
                <div className="flex gap-[0.5rem]">
                  <img src="/icon/Comments.svg" alt="댓글아이콘" width="20" height="20" />
                  <p className="text-[1.4rem] font-regular text-[#A7A9B4]">{post.commentCount}</p>
                </div>
              </div>
            </div>
            <div className="flex gap-[0.7rem]">
              <div className="w-[2.4rem] h-[2.4rem] bg-[#A7A9B4] rounded-[50rem]"></div>
              <p className="font-regular text-[1.4rem] leading-[150%] tracking-[-0.3%]">
                멋진무지개
              </p>
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

export default PostListTitleMobile;
