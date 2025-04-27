import useUiState from '../../store/useUiState';

const HamburgerMenu = () => {
  const toggleHamburgerMenuOpen = useUiState(state => state.toggleHamburgerMenu);
  return (
    <>
      <div className="absolute flex flex-col gap-6 h-[100vh] top-0 left-0 bg-white w-[28rem] px-[1.6rem] py-[3.2rem] z-10">
        {/* 닫기 버튼 */}
        <button className="flex justify-end w-full">
          <img
            src="/icon/Close.svg"
            alt="닫기 버튼"
            width="40"
            height="40"
            onClick={toggleHamburgerMenuOpen}
            className="cursor-pointer"
          />
        </button>
        {/* 프로필이미지, 닉네임 */}
        <div className="flex gap-4 h-[5.1rem] border-b-[1px] border-solid border-[#EEEFF1]">
          <div className="w-[2.7rem] h-[2.7rem] bg-[#A7A9B4] rounded-[50rem]"></div>
          <p className="font-bold text-[1.6rem] leading-[150%] tracking-[-0.3%]">멋진무지개</p>
        </div>
        {/* 하단 메뉴 */}
        <div className="flex flex-col gap-4 items-start">
          <button className="font-regular text-[1.6rem] leading-[150%] tracking-[-0.3%] cursor-pointer">
            로그인
          </button>
          <button className="font-regular text-[1.6rem] leading-[150%] tracking-[-0.3%] cursor-pointer">
            커뮤니티
          </button>
        </div>
      </div>

      {/* 오버레이 */}
      <div
        onClick={toggleHamburgerMenuOpen}
        className="absolute inset-0 bg-black opacity-70 h-[100vh] w-[100%] z-1"
      ></div>
    </>
  );
};

export default HamburgerMenu;
