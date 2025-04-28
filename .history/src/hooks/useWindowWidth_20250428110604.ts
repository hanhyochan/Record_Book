import { useState } from 'react';

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const monitorWindowWidth = () => {
    if (Purpose) {
      // 인풋별 유효성 검사 함수 호출
      const validateRule = validationRules[Purpose];
      const error = validateRule(value);
      setErrorMessage(error);
    } else {
      // 게시글 유효성 검사 함수 호출
      const validateRule = validationRules['postTextarea'];
      const error = validateRule(value);

      setErrorMessage(error);
    }
  };

  return { validate, errorMessage };
};

export default useWindowWidth;
