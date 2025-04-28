import useValidation from '../../../hooks/useValidation';
import { textareaProps } from '../../../types/textarea';

const Textarea = ({ placeholder, onChange, value }: textareaProps) => {
  const { validate, errorMessage } = useValidation({ value });

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
            onChange={onChange}
            onBlur={handleBlur}
            placeholder={placeholder}
            maxLength={300}
          />
          <span
            className={`absolute bottom-[1rem] right-[1.6rem] text-[1.2rem] ${
              errorMessage ? 'text-[#D11111]' : 'text-[#999]'
            }`}
          >
            {value.length}/300
          </span>
        </div>

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
