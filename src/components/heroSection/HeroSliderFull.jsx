import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const HeroSliderFull = () => {

  return <>
    <div className="">
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        navigation
        className='heroSlider mb-4'
      >
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://plus.unsplash.com/premium_photo-1712604942624-9c5ea0cbfda7" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1660634806611-d3d03b7c28fe" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  </>;
};

export default HeroSliderFull;
