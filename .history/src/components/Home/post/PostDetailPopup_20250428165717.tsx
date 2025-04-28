import useUiState from '../../../store/useUiState';
import { useState, useEffect } from 'react';
import { postDetailType } from '../../../types/post';

const PostDetailPopup = () => {
  const { postDetailContents } = useUiState();
  const [postDetail, setPostDetail] = useState<postDetailType | null>(null);

  useEffect(() => {
    if (postDetailContents) {
      setPostDetail(postDetailContents);
    }
  }, [postDetailContents]);
  console.log(postDetail);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear().toString().slice(2, 4);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  return (
    <div className="w-[100%] h-[100%] flex flex-col bg-white border-[0.1rem] border-[#EEEFF1] rounded-[1.2rem]">
      <div className="h-[12.4rem] p-[2.4rem] flex flex-col gap-[2rem] border-b border-b-[0.1rem] border-[#EEEFF1]">
        <p className="text-[2.4rem] font-bold leading-[160%] tracking-[-0.3%]">
          {postDetail?.title}
        </p>
        <p className="font-regular text-[1.6rem] text-[#A7A9B4]">
          {postDetail?.author?.nickname ?? '예시닉네임'} | {formatDate(postDetail?.createdAt ?? '')}
        </p>
      </div>

      <div className="h-[26.1rem] p-[2.4rem] flex flex-col gap-[2rem] border-b border-b-[0.1rem] border-[#EEEFF1]">
        <div className="h-[80%] overflow-y-auto">
          <p className="text-[1.6rem] font-regular leading-[160%] tracking-[-0.3%]">
            {postDetail?.content}
          </p>
        </div>
        <div className="flex gap-[0.5rem]">
          <img src="/icon/Comments.svg" alt="댓글아이콘" width="22.19" height="18" />
          <p className="text-[1.6rem] font-regular text-[#A7A9B4]">{postDetail?.commentCount}</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetailPopup;
