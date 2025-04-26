import './App.css';
import PrimaryBtn from './components/button/PrimaryBtn';
import WriteBtn from './components/button/WriteBtn';

function App() {
  return (
    <>
      <PrimaryBtn tag="primaryBtnLg" disabled={true}>
        등록하기
      </PrimaryBtn>
      <PrimaryBtn tag="primaryBtnMd" disabled={true}>
        등록
      </PrimaryBtn>
      <PrimaryBtn tag="primaryBtnSm" disabled={true}>
        등록
      </PrimaryBtn>
      <WriteBtn>글쓰기</WriteBtn>
    </>
  );
}

export default App;
