// Input.tsx
import useValidation from '../../../hooks/useValidation';
import { InputProps } from '../../../types/input';

const Input = ({ purpose: Purpose = 'idInput', placeholder, value, onChange }: InputProps) => {
  const { validate, errorMessage } = useValidation({ Purpose, value });

  const determineInputType = (Purpose: InputProps['purpose']) => {
    if (Purpose === 'pwInput') {
      return 'password';
    }
    return 'text';
  };

  const handleBlur = () => {
    validate();
  };

  return (
    <div className="flex flex-col gap-[1rem]">
      <input
        className={`w-[100%] h-[4.8rem] border border-solid ${
          errorMessage ? 'border-[#D11111] border-[0.2rem]' : 'border-[#eeeff1]'
        } rounded-[0.8rem] px-[1.2rem] py-[1.6rem] placeholder-[#C8C9D0]`}
        type={determineInputType(Purpose)}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        data-purpose={Purpose}
        placeholder={placeholder}
      />
      {errorMessage && (
        <span className="text-[#D11111] font-SemiBold text-[1.4rem] pl-[1rem]">{errorMessage}</span>
      )}
    </div>
  );
};

export default Input;
