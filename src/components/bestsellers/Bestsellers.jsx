import React from "react";
import ProductCard from "../productCard/ProductCard";
import { BestsellersProducts } from "../../staticData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";

const Bestsellers = () => {
  return (
    <>
      <section className="bestsellers-sec">
        <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap mb-3">
          <h2 className="m-0 p-0">🔥 Bestseller</h2>
          <div className="d-flex align-items-center gap-2">
            <button className="best-seller-prev"></button>
            <button className="best-seller-next"></button>
          </div>
        </div>
        {BestsellersProducts.length > 0 && (
          <Swiper
            modules={[Navigation, Autoplay, EffectFade]}
            slidesPerView={5}
            loop={true}
            navigation={{
              nextEl: ".best-seller-next",
              prevEl: ".best-seller-prev",
            }}
            className="discount-coupon-slider"
            spaceBetween={20}
          >
            {BestsellersProducts.map((product, index) => (
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
