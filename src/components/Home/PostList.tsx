import WriteBtn from '../common/button/WriteBtn';
import useUiState from '../../store/useUiState';

const PostList = () => {
  const isPostWritePopupOpen = useUiState(state => state.isPostWritePopupOpen);
  const togglePostWritePopup = useUiState(state => state.togglePostWritePopup);

  const openWriteModal = () => {
    if (!isPostWritePopupOpen) {
      togglePostWritePopup();
    }
  };
  return (
    <div className="bg-white w-[100%] h-[65.2rem] rounded-[1.2rem] flex flex-col">
      <div className="flex justify-between items-center p-[2.4rem] border-b border-[0.1rem] border-[#EEEFF1]">
        <p className="text-[2rem] font-bold leading-[160%] tracking-[-0.3%]">게시판</p>
        <WriteBtn onClick={openWriteModal}>글쓰기</WriteBtn>
      </div>
    </div>
  );
};

export default PostList;
