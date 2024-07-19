import Card from "../Card/Card";
import "./Recent.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../rtk/slices/RealestateSlice";

export default function Recent() {
  const { realestate } = useSelector((state) => state.Realestate);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div
      className="bg-white"
    >
      <div className="flex flex-col justify-center h-[950px]">
        <p className="text-secondary-color text-[17px] p-0 m-0 font-bold text-center">
        Properties
        </p>
        <p className="text-[38px] p-0 m-0 text-center">For Rent</p>
        <p className="text-text-secondary text-[17px] p-0 m-0 text-center">
        Check out latest properties for rent.</p>
        <div className="m-0 relative">
          <Swiper
            className="mx-12"
            slidesPerView={1}
            spaceBetween={10}
            navigation={{ nextEl: ".right-arrow", prevEl: ".left-arrow" }}
            breakpoints={{
              720: {
                slidesPerView: 2,
              },
              920: {
                slidesPerView: 3,
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Scrollbar, Pagination]}
          >
            {realestate?.map(
              (items, _id) =>
                items?.type === "Rent" && (
                  <SwiperSlide key={_id} className="mb-12 md:mb-9">
                  <Card items={items} />
                </SwiperSlide>
                )
            )}
          </Swiper>
          <div className="swiper-arrows">
          <div className="left-arrow absolute text-[19px] cursor-pointer top-[50%] left-2">
          <IoIosArrowBack />
          </div>
          <div className="right-arrow text-[19px] cursor-pointer absolute top-[50%] right-4">
          <IoIosArrowForward />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
