import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Navigation , Autoplay} from "swiper/modules";
import "../../Pages/Home/Home.css";
export default function BannerSlide() {
  const imageData = useMemo(
    () => [
      "./assets/slide-one.webp",
      "./assets/slide-two.webp",
      "./assets/slide-three-1.webp",
    ],
    []
  );
  return (
    <div className="swiper-wrapper-brand-shape">
      <Swiper
        loop={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        navigation={{ nextEl: ".next", prevEl: ".prev" }}
        modules={[Navigation,Autoplay]}
      >
        {imageData.map((image, _id) => {
          return (
            <SwiperSlide className="w-full h-[100vh]" key={_id}>
              <img src={image} alt="logo" className="h-[115vh] md:h-[100vh] object-cover" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="swiper-arrows hidden md:block">
        <div className="prev">
          <FaLongArrowAltLeft />
        </div>
        <div className="next">
          <FaLongArrowAltRight />
        </div>
      </div>
    </div>
  );
}