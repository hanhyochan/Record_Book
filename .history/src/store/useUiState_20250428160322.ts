import { create } from 'zustand';

interface UiStateProps {
  // 모바일 햄버거 메뉴 오픈
  isHamburgerMenuOpen: boolean;
  toggleHamburgerMenu: () => void;
  setHamburgerMenuFalse: () => void;

  // 로그인 여부에 따른 UI 변경
  isLoginPopupOpen: boolean;
  toggleLoginPopup: () => void;

  // 게시글 작성 팝업 오픈
  isPostWritePopupOpen: boolean;
  togglePostWritePopup: () => void;
  setPostWritePopupFalse: () => void;

  // 게시글 조회 팝업 오픈
  isPostDetailPopupOpen: boolean;
  togglePostDetailPopup: () => void;
  setPostDetailPopupFalse: () => void;

  // 화면 너비 감지
  windowWidth: number;
  setWindowWidth: (width: number) => void;

  // 게시글 상세 데이터
  postDetailContents: null,
  setPostDetailContents: (data: any) => set({ postDetailContents: data }),
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
  togglePostWritePopup: () =>
    set(state => {
      if (state.isPostDetailPopupOpen) {
        set({ isPostDetailPopupOpen: false });
      }
      return { isPostWritePopupOpen: !state.isPostWritePopupOpen };
    }),
  setPostWritePopupFalse: () => set(() => ({ isPostWritePopupOpen: false })),

  // 게시글 조회 팝업 오픈
  isPostDetailPopupOpen: false,
  togglePostDetailPopup: () =>
    set(state => {
      if (state.isPostWritePopupOpen) {
        set({ isPostWritePopupOpen: false });
      }
      return { isPostDetailPopupOpen: !state.isPostDetailPopupOpen };
    }),
  setPostDetailPopupFalse: () => set(() => ({ isPostDetailPopupOpen: false })),

  // 화면 너비 감지
  windowWidth: window.innerWidth,
  setWindowWidth: (width: number) => set({ windowWidth: width }),

  // 게시글 상세 데이터
  postDetailContents: null,
  setPostDetailContents: (data: any) => set({ postDetailContents: data }),
}));

export default useUiState;
