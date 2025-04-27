import { ReactNode } from 'react';

interface WriteBtnProps {
  onClick?: () => void;
  disabled?: boolean;
  children: ReactNode;
}

const WriteBtn = ({ onClick, disabled = false, children }: WriteBtnProps) => {
  // 활성화 스타일
  const activeClasses =
    'bg-[#6025E1] text-white cursor-pointer hover:bg-[#5522C3] active:bg-[#320397]';

  // 비활성화 스타일
  const inactiveClasses = 'bg-[#D6D7DC] text-[#A7A9B4] cursor-not-allowed';

  return (
    <button
      className={`w-[8.4rem] h-[4.8rem] font-bold rounded-[0.8rem] px-[2rem] py-[1.2rem] ${
        disabled ? inactiveClasses : activeClasses
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default WriteBtn;
