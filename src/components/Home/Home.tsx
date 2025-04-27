import CardContent from './CardContent';

const Home = () => {
  return (
    <div className="w-[120rem] h-[57.2rem] flex flex-col justify-center items-center gap-18">
      <div className="w-[100%] h-[100%] flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-6">
          <p className="text-[1.8rem] font-bold text-[#5E616E]">다글제작소</p>
          <p className="text-[3.2rem] font-bold leading-[160%] tracking-[-1.5%] text-center">
            다글제작소의 과제전형에
            <br />
            오신것을 환영합니다.
          </p>
        </div>
        <CardContent />
      </div>
    </div>
  );
};

export default Home;
