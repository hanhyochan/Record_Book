import { create } from 'zustand';

interface UiStateProps {
  isHamburgerMenuOpen: boolean;
  toggleHamburgerMenu: () => void;
  setHamburgerMenuFalse: () => void;
  isLoginPopupOpen: boolean;
  toggleLoginPopup: () => void;
  isPostWritePopupOpen: boolean;
  togglePostWritePopup: () => void;
  setPostWritePopupFalse: () => void;
  windowWidth: number;
  setWindowWidth: (width: number) => void;
}

const useUiState = create<UiStateProps>(set => ({
  // 모바일 햄버거 메뉴 오픈
  isHamburgerMenuOpen: false,
  toggleHamburgerMenu: () => set(state => ({ isHamburgerMenuOpen: !state.isHamburgerMenuOpen })),
  setHamburgerMenuFalse: () => set(() => ({ isHamburgerMenuOpen: false })),

  // 로그인 여부에 따른 UI 변경
  isLoginPopupOpen: false,
  toggleLoginPopup: () => set(state => ({ isLoginPopupOpen: !state.isLoginPopupOpen })),

  // 게시글 작성 팝업 오픈
  isPostWritePopupOpen: false,
  togglePostWritePopup: () => set(state => ({ isPostWritePopupOpen: !state.isPostWritePopupOpen })),
  setPostWritePopupFalse: () => set(() => ({ isPostWritePopupOpen: false })),

  // 화면 너비 감지
  windowWidth: window.innerWidth,
  setWindowWidth: (width: number) => set({ windowWidth: width }),
}));

export default useUiState;
