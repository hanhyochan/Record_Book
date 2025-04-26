import { validationRules } from '../utils/validationRules';
import { UseValidationProps } from '../types/input';
import { useState } from 'react';

const useValidation = ({ Purpose, value }: UseValidationProps) => {
  const [errorMessage, setErrorMessage] = useState<string>('');

  const validate = () => {
    // 인풋별 유효성 검사 함수 호출
    const validateRule = validationRules[Purpose];
    const error = validateRule(value);

    setErrorMessage(error);
  };

  return { validate, errorMessage };
};

export default useValidation;
