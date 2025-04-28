import { ReactNode } from 'react';

interface MobileWriteBtnProps {
  onClick?: () => void;
  children: ReactNode;
}

const MobileWriteBtn = ({ onClick, children }: MobileWriteBtnProps) => {
  return (
    <button
      className="w-[5.6rem] h-[5.6rem] bg-[#6025E1] rounded-[5rem] cursor-pointer flex items-center justify-center shadow-[0px_4px_5px_0px_rgba(159,159,159,0.25)]"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MobileWriteBtn;

{
  /* <MobileWriteBtn>
<img src="/icon/Pencil.svg" alt="연필 아이콘" width="24" height="24" />
</MobileWriteBtn> */
}
