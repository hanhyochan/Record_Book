const PostListTitle = ({post}) => {
    // 날짜 포맷 함수
    const formatDate = (dateString: string) => {
      const date = new Date(dateString);
      const year = date.getFullYear().toString().slice(2, 4);
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}.${month}.${day}`;
    };

return(
  <>
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
    </div>
  </>
)
}

export default PostListTitle;