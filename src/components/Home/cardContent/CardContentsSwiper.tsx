import { CardContentsData } from './CardContentsData';
import CardContent from './CardContent';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const CardContentsSwiper = () => {
  return (
    <div className="w-[100%]">
      <Swiper
        spaceBetween={25}
        slidesPerView="auto"
        loop={true}
        grabCursor={true}
        // breakpoints={{
        //   641: {
        //     slidesPerView: 1,
        //   },
        // }}
      >
        {CardContentsData.map((card, index) => (
          <SwiperSlide style={{ flexShrink: 1 }} key={`${card.imgName}_${index}`}>
            <CardContent
              imgName={card.imgName}
              title={card.title}
              subTitle={card.subTitle}
              desc={card.desc}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardContentsSwiper;
