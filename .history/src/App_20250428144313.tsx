import './App.css';
import useAuth from './store/useAuth';
import useUiState from './store/useUiState';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import LoginPopup from './components/LoginPopup';
import PostWritePopup from './components/Home/post/PostWritePopup';
import PostDetailPopup from './components/Home/post/PostDetailPopup';

function App() {
  const { isLoggedIn } = useAuth();
  const { isPostWritePopupOpen, isPostDetailPopupOpen } = useUiState();

  // 로그인 여부에 따라 조건 분기
  if (!isLoggedIn) {
    return (
      <>
        <Header />
        <main>
          <LoginPopup />
        </main>
      </>
    );
  }

  // 스위치문으로 팝업 상태 관리
  switch (true) {
    case isPostWritePopupOpen:
      return (
        <>
          <Header />
          <main>
            <PostWritePopup />
          </main>
        </>
      );
    case isPostDetailPopupOpen:
      return (
        <>
          <Header />
          <main>
            <PostDetailPopup />
          </main>
        </>
      );
    default:
      return (
        <>
          <Header />
          <main>
            <Home />
          </main>
        </>
      );
  }
}

export default App;
