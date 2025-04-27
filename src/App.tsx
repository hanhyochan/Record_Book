import './App.css';
import useAuth from './store/useAuth';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import LoginPopup from './components/LoginPopup';

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Header />
      <main>{isLoggedIn ? <Home /> : <LoginPopup />}</main>
    </>
  );
}

export default App;
