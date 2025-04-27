import Input from './common/input/Input';
import Textarea from './common/textarea/Textarea';
import PrimaryBtn from './common/button/PrimaryBtn';

const PostPopup = () => {
  return (
    <div className="w-[100%] h-[100%] flex flex-col justify-center items-center gap-18">
      <div className="w-[100%] h-[100%] flex flex-col  gap-8 min-[642px]:w-[78.4rem] min-[1025px]:w-[120rem] bg-white border-[0.1rem] border-[#EEEFF1] rounded-[1.2rem] p-[2.4rem]">
        <p className="text-[2rem] font-bold leading-[160%] tracking-[-0.3%]">게시글 작성</p>
        <div className="flex flex-col gap-[1.5rem] w-[100%]">
          <Input purpose="postTitleInput" placeholder="제목을 입력해주세요." />
          <Textarea placeholder="내용을 입력해주세요." />
        </div>
      </div>
      <PrimaryBtn size="primaryBtnLg" onClick={() => alert('gkgk')}>
        등록하기
      </PrimaryBtn>
    </div>
  );
};

export default PostPopup;
