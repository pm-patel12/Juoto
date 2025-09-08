import React from "react";
import ProductCard from "../ProductCard";
import { BestsellersProducts } from "../../staticData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import { useStoreConfig } from "../../StoreConfigContext";

const Bestsellers = () => {
  // Store configuration
  const storeConfig = useStoreConfig();
  const { cardStyle } = storeConfig.theme.prodCardType;
  return (
    <>
      <div className="container">
        <section className="bestsellers-sec section-space">
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
              slidesPerView={cardStyle == 'list' ? 2 : 5}
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
      </div>
    </>
  );
};

export default Bestsellers;
