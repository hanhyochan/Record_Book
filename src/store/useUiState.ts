import { create } from 'zustand';

interface UiState {
  isHamburgerMenuOpen: boolean;
  toggleHamburgerMenu: () => void;
  setHamburgerMenuFalse: () => void;
}

const useUiState = create<UiState>(set => ({
  isHamburgerMenuOpen: false,
  toggleHamburgerMenu: () => set(state => ({ isHamburgerMenuOpen: !state.isHamburgerMenuOpen })),
  setHamburgerMenuFalse: () => set(() => ({ isHamburgerMenuOpen: false })),
}));

export default useUiState;
