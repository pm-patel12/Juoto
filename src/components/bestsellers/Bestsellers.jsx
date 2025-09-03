import React from "react";
import ProductCard from "../productCard/ProductCard";
import { productsData } from "../../staticData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Bestsellers = () => {
  return (
    <>
      <section className="bestsellers-sec">
        <div className="d-flex align-items-center justify-contet-between gap-2 flex-wrap">
          <h2>🔥 Bestseller</h2>
        </div>
        {productsData.length > 0 && (
          <Swiper
            modules={[Navigation, Autoplay, EffectFade]}
            slidesPerView={5}
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
            className="discount-coupon-slider"
          >
            {productsData.map((product, index) => (
              <SwiperSlide key={index}>
                <ProductCard data={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </section>
    </>
  );
};

export default Bestsellers;
