import Input from '../../common/input/Input';
import Textarea from '../../common/textarea/Textarea';
import PrimaryBtn from '../../common/button/PrimaryBtn';
import { useState } from 'react';
import { postApi } from '../../../api/post';
import useUiState from '../../../store/useUiState';

const PostWritePopup = () => {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const setPostWritePopupFalse = useUiState(state => state.setPostWritePopupFalse);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  // 비밀번호 입력값 변경 핸들러
  const handleContentsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handlePost = async () => {
    const postData = {
      title,
      content,
    };

    const response = await postApi(postData);

    if (response.status === 201) {
      alert('게시글 작성이 완료되었습니다.');
      setPostWritePopupFalse();
    }

    setTitle(``);
    setContent(``);
  };

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

export default PostWritePopup;
