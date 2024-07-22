import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
export default function Brands() {
  const imageData = useMemo(
    () => [
        "./assets/brand1.webp",
      "./assets/brand2.webp",
      "./assets/brand3.webp",
      "./assets/brand4.webp",
      "./assets/brand5.webp",
    ],
    []
  );
  return (
    <div
      className="flex flex-col items-center justify-center w-full text-center
       p-[60px] gap-2
        pb-10"
    >
      <p className="text-secondary-color text-[17px] p-0 m-0 font-bold">OUR</p>
      <p className="text-[38px] p-0 m-0">Partners</p>
      <p className="text-text-secondary text-[17px] p-0 m-0">
        We honoured to have these amazing partners.
      </p>

      <div className="container pt-9">
        <Swiper
          loop={true}
          spaceBetween={40}
          slidesPerView={2}     
          breakpoints={{
            1100: {
              slidesPerView: 5,
            },
            800: {
                slidesPerView: 3,
              },
          }}
        >
          {imageData.map((image, _id) => {
            return (
              <SwiperSlide className="h-[80px]" key={_id}>
                <img src={image} alt="logo" className="h-full" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
