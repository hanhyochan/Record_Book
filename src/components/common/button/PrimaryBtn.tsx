import { ReactNode } from 'react';

interface PrimaryBtnProps {
  size: 'primaryBtnLg' | 'primaryBtnMd' | 'primaryBtnSm';
  onClick?: () => void;
  disabled?: boolean;
  children: ReactNode;
  width?: string;
}

const PrimaryBtn = ({
  size: Size = 'primaryBtnLg',
  onClick,
  disabled = false,
  children,
  width,
}: PrimaryBtnProps) => {
  // 기본 스타일
  const baseClasses = {
    primaryBtnLg: 'w-[20rem] h-[5.9rem] font-bold rounded-[1.2rem] px-[2.4rem] py-[1.6rem]',
    primaryBtnMd: 'w-[8.9rem] h-[5.2rem] font-bold rounded-[0.8rem] px-[2.4rem] py-[1.2rem]',
    primaryBtnSm: 'w-[8.4rem] h-[4.8rem] font-bold rounded-[0.8rem] px-[2.4rem] py-[1.2rem]',
  };

  // 활성화 스타일
  const activeClasses = 'bg-black text-white cursor-pointer hover:bg-[#474953] active:bg-[#5E616E]';

  // 비활성화 스타일
  const inactiveClasses = 'bg-[#D6D7DC] text-[#A7A9B4] cursor-not-allowed';

  return (
    <button
      className={`${baseClasses[Size]} ${width || ''} ${
        disabled ? inactiveClasses : activeClasses
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;

// import { ReactNode } from 'react';

// interface PrimaryBtnProps {
//   size: 'primaryBtnLg' | 'primaryBtnMd' | 'primaryBtnSm';
//   onClick?: () => void;
//   disabled?: boolean;
//   children: ReactNode;
// }

// const PrimaryBtn = ({
//   size: Size = 'primaryBtnLg',
//   onClick,
//   disabled = false,
//   children,
// }: PrimaryBtnProps) => {
//   // 기본 스타일
//   const baseClasses = {
//     primaryBtnLg: 'w-[20rem] h-[5.9rem] font-bold rounded-[1.2rem] px-[2.4rem] py-[1.6rem]',
//     primaryBtnMd: 'w-[8.9rem] h-[5.2rem] font-bold rounded-[0.8rem] px-[2.4rem] py-[1.2rem]',
//     primaryBtnSm: 'w-[8.4rem] h-[4.8rem] font-bold rounded-[0.8rem] px-[2.4rem] py-[1.2rem]',
//   };

//   // 활성화 스타일
//   const activeClasses = 'bg-black text-white cursor-pointer hover:bg-[#474953] active:bg-[#5E616E]';

//   // 비활성화 스타일
//   const inactiveClasses = 'bg-[#D6D7DC] text-[#A7A9B4] cursor-not-allowed';

//   return (
//     <button
//       className={`${baseClasses[Size] || ''} ${disabled ? inactiveClasses : activeClasses}`}
//       onClick={onClick}
//       disabled={disabled}
//     >
//       {children}
//     </button>
//   );
// };

// export default PrimaryBtn;
