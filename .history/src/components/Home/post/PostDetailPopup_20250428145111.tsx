const PostDetailPopup = () => {
  return (
    <div className="w-[100%] h-[100%] flex flex-col justify-center items-center gap-18 bg-white border-[0.1rem] border-[#EEEFF1] rounded-[1.2rem] p-[2.4rem]">
      <p className="text-[2rem] font-bold leading-[160%] tracking-[-0.3%]">게시글 작성</p>
      <div className="flex flex-col gap-[1.5rem] w-[100%]">
        <Input
          purpose="postTitleInput"
          placeholder="제목을 입력해주세요."
          value={title}
          onChange={handleTitleChange}
        />
        <Textarea
          value={content}
          placeholder="내용을 입력해주세요."
          onChange={handleContentsChange}
        />
      </div>
      <PrimaryBtn size="primaryBtnLg" onClick={handlePost}>
        등록하기
      </PrimaryBtn>
    </div>
  );
};

export default PostDetailPopup;
