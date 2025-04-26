import { useState } from 'react';

interface UseValidationProps {
  Purpose: 'idInput' | 'pwInput' | 'postTitleInput' | 'commentInput';
  value: string;
}

const useValidation = ({ Purpose, value }: UseValidationProps) => {
  const [errorMessage, setErrorMessage] = useState<string>('');

  const validate = () => {
    const englishRegex = /^[A-Za-z]+$/;

    switch (Purpose) {
      case 'idInput':
        if (value.trim() === '') {
          setErrorMessage('아이디를 입력해주세요.');
        } else if (value.length < 4 || value.length > 12) {
          setErrorMessage('아이디를 4자 이상 12자 이하로 입력해주세요.');
        } else if (!englishRegex.test(value)) {
          setErrorMessage('아이디는 영문자만 입력 가능합니다.');
        } else {
          setErrorMessage('');
        }
        break;

      case 'pwInput':
        if (value.trim() === '') {
          setErrorMessage('비밀번호를 입력해주세요.');
        } else if (value.length < 4 || value.length > 12) {
          setErrorMessage('비밀번호를 4자 이상 12자 이하로 입력해주세요.');
        } else if (!englishRegex.test(value)) {
          setErrorMessage('비밀번호는 영문자만 입력 가능합니다.');
        } else {
          setErrorMessage('');
        }
        break;

      case 'postTitleInput':
        if (value.trim() === '') {
          setErrorMessage('최소 1자 이상 입력해주세요.');
        } else {
          setErrorMessage('');
        }
        break;

      case 'commentInput':
        if (value.trim() === '') {
          setErrorMessage('댓글을 입력해주세요.');
        } else {
          setErrorMessage('');
        }
        break;
    }
  };

  return { validate, errorMessage };
};

export default useValidation;
