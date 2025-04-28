import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Tokens {
  accessToken: string;
  refreshToken: string;
}

interface useAuthProps {
  isLoggedIn: boolean;
  tokens: Tokens | null; // 토큰 객체를 상태로 추가
  login: (newTokens: Tokens) => void; // 토큰 객체를 받도록 수정
  logout: () => void;
}

const useAuth = create(
  persist<useAuthProps>(
    set => ({
      isLoggedIn: false,
      tokens: localStorage.getItem('tokens') ? JSON.parse(localStorage.getItem('tokens')!) : null, // 로컬 스토리지에서 토큰 객체 가져오기
      login: (newTokens: Tokens) => {
        set({ isLoggedIn: true, tokens: newTokens });
        localStorage.setItem('tokens', JSON.stringify(newTokens)); // 객체를 로컬 스토리지에 저장
      },
      logout: () => {
        set({ isLoggedIn: false, tokens: null });
        localStorage.removeItem('tokens'); // 로컬 스토리지에서 토큰 삭제
      },
    }),
    {
      name: 'auth-storage', // 로컬 스토리지에서 사용할 이름
    },
  ),
);

export default useAuth;
