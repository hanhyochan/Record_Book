import { postType } from '../../../types/post';

const PostListTitleMobile = ({ post }: postType) => {
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
      <div className="flex flex-col gap-[1rem]">
        <p className="text-[1.6rem] font-bold leading-[160%] tracking-[-0.3%]">{post.title}</p>
        <div className="flex gap-[1.3rem]">
          <p className="text-[1.4rem] font-regular text-[#A7A9B4]">{formatDate(post.createdAt)}</p>
          <div className="flex gap-[0.5rem]">
            <img src="/icon/Comments.svg" alt="댓글아이콘" width="20" height="20" />
            <p className="text-[1.4rem] font-regular text-[#A7A9B4]">{post.commentCount}</p>
          </div>
        </div>
      </div>
      <div className="flex gap-[0.7rem]">
        <div className="w-[2.4rem] h-[2.4rem] bg-[#A7A9B4] rounded-[50rem]"></div>
        <p className="font-regular text-[1.4rem] leading-[150%] tracking-[-0.3%]">멋진무지개</p>
      </div>
    </>
  );
};

export default PostListTitleMobile;
