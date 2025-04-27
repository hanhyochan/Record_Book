import { create } from 'zustand';

interface UiStateProps {
  isHamburgerMenuOpen: boolean;
  toggleHamburgerMenu: () => void;
  setHamburgerMenuFalse: () => void;
  isLoginPopupOpen: boolean;
  toggleLoginPopup: () => void;
}

const useUiState = create<UiStateProps>(set => ({
  // 모바일 햄버거 메뉴 상태
  isHamburgerMenuOpen: false,
  toggleHamburgerMenu: () => set(state => ({ isHamburgerMenuOpen: !state.isHamburgerMenuOpen })),
  setHamburgerMenuFalse: () => set(() => ({ isHamburgerMenuOpen: false })),
  // 로그인 버튼 클릭 시 로그인팝업
  isLoginPopupOpen: false,
  toggleLoginPopup: () => set(state => ({ isLoginPopupOpen: !state.isLoginPopupOpen })),
}));

export default useUiState;
