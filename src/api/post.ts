import axios from 'axios';

// 게시글 post 함수
export const postApi = async (postData: { title: string; content: string }) => {
  try {
    const authData = localStorage.getItem('tokens');

    if (!authData) {
      throw new Error('토큰이 존재하지 않습니다.');
    }

    const parsedAuthData = JSON.parse(authData);

    const accessToken = parsedAuthData.accessToken;

    if (!accessToken) {
      throw new Error('accessToken이 존재하지 않습니다.');
    }

    const response = await axios.post('https://api.daggle.io/api/posts', postData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response;
  } catch (error) {
    console.error('API 요청 에러:', error);
    alert('요청을 다시 시도해주십시오.');
    throw error;
  }
};

// 게시글 get 함수
export const postGetApi = async (postData: { title: string; content: string }) => {
  try {
    const authData = localStorage.getItem('tokens');

    if (!authData) {
      throw new Error('토큰이 존재하지 않습니다.');
    }

    const parsedAuthData = JSON.parse(authData);

    const accessToken = parsedAuthData.accessToken;

    if (!accessToken) {
      throw new Error('accessToken이 존재하지 않습니다.');
    }

    const response = await axios.post('https://api.daggle.io/api/posts', postData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response;
  } catch (error) {
    console.error('API 요청 에러:', error);
    alert('요청을 다시 시도해주십시오.');
    throw error;
  }
};
