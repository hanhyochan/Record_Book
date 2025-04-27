// LoginPopup.tsx
import Input from './common/input/Input';
import PrimaryBtn from './common/button/PrimaryBtn';
import { useState } from 'react';
import { loginApi } from '../api/auth';
import useAuth from '../store/useAuth';

const LoginPopup = () => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  // 아이디 입력값 변경 핸들러
  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginId(e.target.value);
  };

  // 비밀번호 입력값 변경 핸들러
  const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    const loginData = {
      loginId,
      password,
    };

    const response = await loginApi(loginData);

    if (response.status === 201) {
      alert('로그인이 완료되었습니다');
      login();
    }

    setLoginId(``);
    setPassword(``);
    console.log(response);
  };

  return (
    <div className="flex flex-col w-[100%] px-[1.6rem] min-[642px]:w-[45.4rem] min-h-[41.3rem] gap-[2rem] bg-white min-[642px]:border-[0.1rem] min-[642px]:border-[#EEEFF1] rounded-[1.2rem] min-[642px]:px-[4rem] py-[3.2rem]">
      <div className="flex flex-col gap-[0.1rem]">
        <p className="text-[3.2rem] font-bold leading-[160%] tracking-[-1.5%]">
          안녕하세요 <br />
          <span className="text-[#320397]">한다글다글입니다.</span>
        </p>
        <p className="text-[1.6rem] font-semibold text-[#A7A9B4] leading-[150%] tracking-[-0.3%]">
          로그인을 통해 더 많은 기능을 이용하세요
        </p>
      </div>

      <div className="flex flex-col gap-[1.5rem] w-[100%]">
        <Input
          purpose="idInput"
          placeholder="아이디를 입력해주세요"
          value={loginId}
          onChange={handleIdChange}
        />
        <Input
          purpose="pwInput"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={handlePwChange}
        />
      </div>

      <PrimaryBtn size="primaryBtnLg" width="w-[100%]" onClick={handleLogin}>
        로그인
      </PrimaryBtn>
    </div>
  );
};

export default LoginPopup;
