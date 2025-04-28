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
