import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCreative,
  EffectFade,
  Navigation,
} from "swiper/modules";
import "swiper/css";
import { useAppContext } from "../../ThemeProvider";

const HeroSlider = () => {
  // Store configuration
  const { storeConfig } = useAppContext();
  const sliderType = storeConfig.theme.heroSliderType;
  return (
    <>
      <div
        className={`heroSliderWrapper ${
          sliderType == "boxed" ? "boxed" : "full"
        }`}
      >
        <Swiper
          modules={[Navigation, Autoplay, EffectFade]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          effect={"fade"}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
        >
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://plus.unsplash.com/premium_photo-1712604942624-9c5ea0cbfda7"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1660634806611-d3d03b7c28fe"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
        <div className="nav-btn-wrap">
          <button className="custom-prev"></button>
          <button className="custom-next"></button>
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
