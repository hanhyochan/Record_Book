import axios from 'axios';

// 로그인 API 요청 함수
export const loginApi = async (loginData: { loginId: string; password: string }) => {
  try {
    const response = await axios.post('https://api.daggle.io/api/auth/login', loginData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  } catch (error) {
    console.error('Login API Error:', error);
    alert('로그인을 다시 시도해주십시오.');
    throw error;
  }
};
