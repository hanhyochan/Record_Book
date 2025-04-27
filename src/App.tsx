import './App.css';
import useAuth from './store/useAuth';
import useUiState from './store/useUiState';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import LoginPopup from './components/LoginPopup';
import PostWritePopup from './components/PostWritePopup';

function App() {
  const { isLoggedIn } = useAuth();
  const { isPostWritePopupOpen } = useUiState();
  console.log(isPostWritePopupOpen);
  return (
    <>
      <Header />
      <main>
        {isLoggedIn ? isPostWritePopupOpen ? <PostWritePopup /> : <Home /> : <LoginPopup />}
      </main>
    </>
  );
}

export default App;
