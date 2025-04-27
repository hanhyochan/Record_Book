interface CardContentProps {
  imgName: string;
  title: string;
  subTitle: string;
  desc: string;
}

const CardContent = ({ imgName, title, subTitle, desc }: CardContentProps) => {
  const imagePath = `/images/${imgName}.png`;
  console.log(imagePath);
  return (
    <div className="w-[31.9rem] h-[39.1rem] rounded-[2rem] flex flex-col relative p-[2.4rem] justify-between">
      <p className="text-white font-bold text-[2.4rem] z-10">{title}</p>
      <div className="flex flex-col gap-4 z-9">
        <hr className="mb-[0.7rem] border-t border-white" />
        <p className="text-white font-regular text-[1.6rem]">{desc}</p>
        <p className="text-white font-bold text-[1.6rem]">{subTitle}</p>
      </div>
      <img
        src={imagePath}
        alt={title}
        className="absolute top-0 left-0 z-1 w-[100%] h-[100%] object-cover rounded-[2rem]"
      />
    </div>
  );
};

export default CardContent;
