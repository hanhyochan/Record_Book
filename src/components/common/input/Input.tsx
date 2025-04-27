import useValidation from '../../../hooks/useValidation';
import { useState } from 'react';
import { InputProps } from '../../../types/input';

const Input = ({ purpose: Purpose = 'idInput', placeholder }: InputProps) => {
  const [value, setValue] = useState<string>('');
  const { validate, errorMessage } = useValidation({ Purpose, value });

  // 인풋 타입 정의
  const determineInputType = (Purpose: InputProps['purpose']) => {
    if (Purpose === 'pwInput') {
      return 'password';
    }
    return 'text';
  };

  // 인풋 입력값 useState에 저장
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // 인풋 포커스 아웃 시 유효성 검사
  const handleBlur = () => {
    validate();
  };

  return (
    <>
      <div className="flex flex-col gap-[1rem]">
        <input
          className={`w-[100%] h-[4.8rem] border border-solid ${
            errorMessage ? 'border-[#D11111] border-[0.2rem]' : 'border-[#eeeff1]'
          } rounded-[0.8rem] px-[1.2rem] py-[1.6rem] placeholder-[#C8C9D0]`}
          type={determineInputType(Purpose)}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          data-purpose={Purpose}
          placeholder={placeholder}
        />
        {errorMessage && (
          <span className="text-[#D11111] font-SemiBold text-[1.4rem] pl-[1rem]">
            {errorMessage}
          </span>
        )}
      </div>
    </>
  );
};

export default Input;
