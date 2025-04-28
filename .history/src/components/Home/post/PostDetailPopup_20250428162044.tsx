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

  return (
    <div className="w-[100%] h-[100%] flex flex-col bg-white border-[0.1rem] border-[#EEEFF1] rounded-[1.2rem]">
      <div className="h-[12.4rem] p-[2.4rem] flex flex-col">
        <p className="text-[2.4rem] font-bold leading-[160%] tracking-[-0.3%]">제목</p>
        <p>멋진 무지개 | 2024.06.12</p>
      </div>
    </div>
  );
};

export default PostDetailPopup;
