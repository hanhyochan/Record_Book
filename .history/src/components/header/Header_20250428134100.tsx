import { useEffect } from 'react';
import HamburgerMenu from './HamburgerMenu';
import useUiState from '../../store/useUiState';
import useAuth from '../../store/useAuth';
import useWindowWidth from '../../hooks/useWindowWidth';

const Header = () => {
  // 햄버거 버튼 클릭 상태 관리
  const isHamburgerMenuOpen = useUiState(state => state.isHamburgerMenuOpen);
  const toggleHamburgerMenu = useUiState(state => state.toggleHamburgerMenu);
  const setHamburgerMenuFalse = useUiState(state => state.setHamburgerMenuFalse);
  // 로그인 여부
  const { isLoggedIn } = useAuth();
  const setPostWritePopupFalse = useUiState(state => state.setPostWritePopupFalse);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    if (windowWidth > 642 && isHamburgerMenuOpen) {
      setHamburgerMenuFalse();
    }
  }, [windowWidth, isHamburgerMenuOpen, setHamburgerMenuFalse]);

  // 모바일 햄버거 버튼 클릭 시
  const toggleHamburgerMenuOpen = () => toggleHamburgerMenu();

  const navigateToHome = () => {
    setPostWritePopupFalse();
  };

  return (
    <div className="sticky top-0 z-100 flex h-[8.6rem] justify-between px-[1.6rem] min-[642px]:px-[3rem] min-[1025px]:px-[12rem] py-[2.4rem] shadow-[0px_9px_10px_0px_rgba(232,232,232,0.25)] border-b-[1px] border-solid border-[#EEEFF1] bg-white">
      {windowWidth >= 642 ? (
        <>
          <img
            src="/images/logo.png"
            alt="다글제작소로고"
            className="cursor-pointer"
            onClick={navigateToHome}
          />
          {isLoggedIn ? (
            <img
              src="/icon/Profile.svg"
              alt="유저아이콘"
              width="38"
              height="38"
              className="cursor-pointer"
            />
          ) : (
            <button className="text-[1.8rem] font-semibold cursor-pointer">로그인</button>
          )}
        </>
      ) : (
        <>
          <button onClick={toggleHamburgerMenuOpen} className="text-[2.4rem] cursor-pointer">
            &#9776;
          </button>
          {isHamburgerMenuOpen && <HamburgerMenu />}
        </>
      )}
    </div>
  );
};

export default Header;
