const Header = () => {
  return (
    <div className="flex justify-between px-[1.6rem] min-[642px]:px-[3rem] min-[1025px]:px-[12rem] py-[2.4rem] shadow-[0px_9px_10px_0px_rgba(232,232,232,0.25)] border-b-[1px] border-solid border-[#EEEFF1] bg-white">
      <p className="font-extrabold text-[2.4rem] leading-[160%] tracking-[-0.3%] align-middle">
        LOGO
      </p>
      <button className="text-[1.8rem] font-semibold cursor-pointer">로그인</button>
    </div>
  );
};

export default Header;
