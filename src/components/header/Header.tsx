import { useState, useEffect } from 'react';
import HamburgerMenu from './HamburgerMenu';
import useUiState from '../../store/useUiState';

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isHamburgerMenuOpen = useUiState(state => state.isHamburgerMenuOpen);
  const toggleHamburgerMenu = useUiState(state => state.toggleHamburgerMenu);
  const setHamburgerMenuFalse = useUiState(state => state.setHamburgerMenuFalse);

  // 화면 너비 감지 함수
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // 화면 너비 감지 함수 실행
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    if (windowWidth < 642) {
      setHamburgerMenuFalse();
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth, setHamburgerMenuFalse]);

  // 모바일 햄버거 버튼 클릭 시
  const toggleHamburgerMenuOpen = () => toggleHamburgerMenu();

  return (
    <div className="sticky top-0 z-100 flex h-[8.6rem] justify-between px-[1.6rem] min-[642px]:px-[3rem] min-[1025px]:px-[12rem] py-[2.4rem] shadow-[0px_9px_10px_0px_rgba(232,232,232,0.25)] border-b-[1px] border-solid border-[#EEEFF1] bg-white">
      {windowWidth >= 642 ? (
        <>
          <p className="font-extrabold text-[2.4rem] leading-[160%] tracking-[-0.3%] align-middle">
            LOGO
          </p>
          <button className="text-[1.8rem] font-semibold cursor-pointer">로그인</button>
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
