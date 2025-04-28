const PostListTitle = () => {
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