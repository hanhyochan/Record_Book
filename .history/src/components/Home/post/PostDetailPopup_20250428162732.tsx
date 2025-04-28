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
  return (
    <div className="w-[100%] h-[100%] flex flex-col bg-white border-[0.1rem] border-[#EEEFF1] rounded-[1.2rem]">
      <div className="h-[12.4rem] p-[2.4rem] flex flex-col gap-[2rem] border-b border-b-[0.1rem] border-[#EEEFF1]">
        <p className="text-[2.4rem] font-bold leading-[160%] tracking-[-0.3%]">
          {postDetail?.title}
        </p>
        <p className="font-regular text-[1.6rem] text-[#A7A9B4]">
          예시닉네임{postDetail?.author.nickname} | {postDetail?.createdAt}
        </p>
      </div>
    </div>
  );
};

export default PostDetailPopup;
