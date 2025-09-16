import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useStoreConfig } from "../../StoreConfigContext";
import HeroSlider from "./HeroSlider";
import { TbPhoneCall } from "react-icons/tb";
import { TbClock } from "react-icons/tb";
import { TbMapPin } from "react-icons/tb";
import DiscountCouponCard from "./DiscountCouponCard";
import { TbShare3 } from "react-icons/tb";
import { discountCouponData } from "../../staticData";
import { TbInfoCircle } from "react-icons/tb";
import LinearCTA from "./LinearCTA";
import { useModal } from "../../hook/useModal";
import OpenHoursModal from "../modals/OpenHoursModal";

const HeroSection = () => {
  // Store configuration
  const storeConfig = useStoreConfig();
  const brandInfo = storeConfig.brandInfo;

  const { openModal } = useModal();

  //   Share Page Handler
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check this out!",
          text: "I found something cool for you 👀",
          url: window.location.href,
        });
      } catch (err) {
        console.error("Share failed:", err);
      }
    } else {
      alert("Sharing is not supported in this browser.");
    }
  };

  return (
    <section className="hero-sec section-space">
      <HeroSlider />
      <div className="container">
        <div className="hero-content">
          <div className="d-flex align-items-start justify-content-between gap-3 flex-md-nowrap flex-wrap mb-4">
            {/* Store informations */}
            <div>
              <h1 className="mb-1">{brandInfo.name}</h1>
              <p className="tag-line mb-4">{brandInfo.tagLine}</p>
              <ul className="store-meta">
                <li>
                  <TbPhoneCall /> {brandInfo.number}
                </li>
                <li>
                  <TbClock />
                  Open | 11:00 AM – 11:00 PM
                  <button
                    className="d-flex align-items-center"
                    onClick={() => openModal("openHoursModal")}
                  >
                    <TbInfoCircle style={{ stroke: "var(--text-600" }} />
                  </button>
                </li>
                <li>
                  <TbMapPin /> {brandInfo.address}
                </li>
              </ul>
            </div>
            {/* Discount Coupon Card */}
            <div>
              {discountCouponData.length > 0 && (
                <div className="discount-coupon-wrap mb-2">
                  <Swiper
                    modules={[Pagination]}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    loop={true}
                    className="discount-coupon-slider"
                  >
                    {discountCouponData.map((coupon, index) => (
                      <SwiperSlide key={index}>
                        <DiscountCouponCard data={coupon} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}
              <div className="w-100 d-flex justify-content-end pe-md-3">
                <button className="ctm-btn white-btn" onClick={handleShare}>
                  <TbShare3 />
                  Share
                </button>
              </div>
            </div>
          </div>
          {/* CTA Section */}
          <LinearCTA />
        </div>
      </div>
      <OpenHoursModal />
    </section>
  );
};

export default HeroSection;
