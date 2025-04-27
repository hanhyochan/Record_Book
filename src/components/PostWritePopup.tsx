import Input from './common/input/Input';
import Textarea from './common/textarea/Textarea';
import PrimaryBtn from './common/button/PrimaryBtn';
// import { useState } from 'react';

const PostWritePopup = () => {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  return (
    <div className="w-[100%] h-[100%] flex flex-col justify-center items-center gap-18 bg-white border-[0.1rem] border-[#EEEFF1] rounded-[1.2rem] p-[2.4rem]">
      <p className="text-[2rem] font-bold leading-[160%] tracking-[-0.3%]">게시글 작성</p>
      <div className="flex flex-col gap-[1.5rem] w-[100%]">
        <Input purpose="postTitleInput" placeholder="제목을 입력해주세요." />
        <Textarea placeholder="내용을 입력해주세요." />
      </div>
      <PrimaryBtn size="primaryBtnLg" onClick={() => alert('gkgk')}>
        등록하기
      </PrimaryBtn>
    </div>
  );
};

export default PostWritePopup;
