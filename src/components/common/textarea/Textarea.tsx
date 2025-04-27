import useValidation from '../../../hooks/useValidation';
import { useState } from 'react';
import { textareaProps } from '../../../types/textarea';

const Textarea = ({ placeholder }: textareaProps) => {
  const [value, setValue] = useState<string>('');
  const { validate, errorMessage } = useValidation({ value });

  // 인풋 입력값 useState에 저장
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  // 인풋 포커스 아웃 시 유효성 검사
  const handleBlur = () => {
    validate();
  };

  return (
    <>
      <div className="flex flex-col gap-[1rem]">
        <textarea
          className="w-[100%] h-[30.6rem] border border-solid border-[#eeeff1] rounded-[0.1rem] p-[1.6rem]"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
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

export default Textarea;
