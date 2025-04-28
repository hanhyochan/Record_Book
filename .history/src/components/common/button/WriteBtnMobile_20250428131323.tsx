import { ReactNode } from 'react';

interface WriteBtnMobileProps {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

const WriteBtnMobile = ({ onClick, children, className }: WriteBtnMobileProps) => {
  return (
    <button
      className={`w-[5.6rem] h-[5.6rem] bg-[#6025E1] rounded-[5rem] cursor-pointer flex items-center justify-center shadow-[0px_4px_5px_0px_rgba(159,159,159,0.25)] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default WriteBtnMobile;
