import useUiState from '../../../store/useUiState';
import { useState, useEffect } from 'react';
import { postDetailType } from '../../../types/post';
import Input from '../../common/input/Input';
import useWindowWidth from '../../../hooks/useWindowWidth';

const PostDetailPopup = () => {
  const { postDetailContents } = useUiState();
  const [postDetail, setPostDetail] = useState<postDetailType | null>(null);
  const windowWidth = useWindowWidth();

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

  useEffect(() => {
    if (windowWidth > 642) {
      // 조건 만족할 경우 상단에 div 공간넣고 그 안에'<'모양 버튼 왼쪽 정렬된거 만들어줘
    }
  }, [windowWidth]);

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
      <div className="h-[26.1rem] p-[2.4rem] flex flex-col justify-between gap-[2rem] border-b border-b-[0.1rem] border-[#EEEFF1]">
        <div className="h-[80%] overflow-y-auto">
          <p className="text-[1.6rem] font-regular leading-[160%] tracking-[-0.3%]">
            {postDetail?.content}
          </p>
        </div>
        <div className="flex items-end gap-[0.5rem]">
          <img src="/icon/Comments.svg" alt="댓글아이콘" width="22.19" height="18" />
          <p className="text-[1.6rem] font-regular text-[#A7A9B4]">{postDetail?.commentCount}개</p>
        </div>
      </div>
      {/* 구분 */}
      <div className="p-[2.4rem] border-b-[0.1rem] border-[#EEEFF1] bg-[#F9FAFA]">
        <div className="flex gap-4 h-[5.1rem]">
          <div className="w-[2.4rem] h-[2.4rem] bg-[#A7A9B4] rounded-[50rem]"></div>
          <p className="font-regular text-[1.6rem] leading-[150%] tracking-[-0.3%]">멋진무지개</p>
        </div>
        <div className="font-regular text-[1.6rem] text-[#474953] leading-[160%] mb-[2rem]">
          내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이
          들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이
          들어갑니다.내용이 들어갑니다.
        </div>
        <div className="text-[1.4rem] text-[#A7A9B4] mb-[2rem]">{formatDate('2024-06-12')}</div>
      </div>
      <div className="p-[2.4rem] border-b-[0.1rem] border-[#EEEFF1] bg-white">
        <Input purpose="commentInput" placeholder="댓글을 통해 자유롭게 의견을 나눠보세요." />
      </div>
      {/* 구분 */}
    </div>
  );
};

export default PostDetailPopup;
