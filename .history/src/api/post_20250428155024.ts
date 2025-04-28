import axios from 'axios';

// 게시글 생성
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

// 게시판 리스트 조회
export const postGetApi = async (page = 1, limit = 10) => {
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

    const response = await axios.get(
      `https://api.daggle.io/api/posts?page=${page}&limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    return response;
  } catch (error) {
    console.error('API 요청 에러:', error);
    alert('요청을 다시 시도해주십시오.');
    throw error;
  }
};

// 게시글 상세 조회
export const postDetailGetApi = async (id: string) => {
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

    const response = await axios.get(`https://api.daggle.io/api/posts/${id}`, {
      headers: {
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
