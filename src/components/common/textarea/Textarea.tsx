import useValidation from '../../../hooks/useValidation';
import { useState } from 'react';
import { textareaProps } from '../../../types/textarea';

const Textarea = ({ placeholder }: textareaProps) => {
  const [value, setValue] = useState<string>('');
  const { validate, errorMessage } = useValidation({ value });

  // 인풋 입력값 useState에 저장
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (newValue.length <= 300) {
      setValue(newValue);
    }
  };

  // 인풋 포커스 아웃 시 유효성 검사
  const handleBlur = () => {
    validate();
  };

  return (
    <>
      <div className="flex flex-col gap-[1rem] relative">
        <div className="relative">
          <textarea
            className={`w-[100%] h-[30.6rem] border border-solid rounded-[0.8rem] ${
              errorMessage ? 'border-[#D11111] border-[0.2rem]' : 'border-[#eeeff1]'
            } rounded-[0.1rem] p-[1.6rem] pb-[3.6rem] placeholder-[#C8C9D0] resize-none`}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={placeholder}
            maxLength={300}
          />
          {/* 글자수 표시 (textarea 안쪽에 고정) */}
          <span
            className={`absolute bottom-[1rem] right-[1.6rem] text-[1.2rem] ${
              errorMessage ? 'text-[#D11111]' : 'text-[#999]'
            }`}
          >
            {value.length}/300
          </span>
        </div>

        {/* 에러메세지 */}
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
