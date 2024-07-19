import FormContact from "../../Pages/Contact/FormContact";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProductsById } from "../../rtk/slices/RealestateSlice";
import { getAgentsById } from "../../rtk/slices/AgentsSlice";
import CommonNote from "./CommonNote";
import Features from "./Features";
import AdditionalDetails from "./AdditionalDetails";
import AgentContact from "./AgentContact";
import PropertyMap from "./PropertyMap";
import VirtualTour from "./VirtualTour";
import DetailItem from "./DetailItem";
import ScheduleTour from "./ScheduleTour";
import FloorPlans from "./FloorPlans";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Helmet, HelmetProvider } from 'react-helmet-async';
export default function Galleria() {
  const [scrImage, setScrImage] = useState("");
  const { apartment } = useSelector((state) => state.Realestate);
  const { agent } = useSelector((state) => state.agents);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getProductsById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (apartment?.agentId) {
      dispatch(getAgentsById(apartment?.agentId));
    }
  }, [dispatch, apartment?.agentId]);
  return (
    <HelmetProvider>
    <Helmet>
      <title>{apartment?.name}</title>
    </Helmet>
    <div className="w-[100vw]">
      <div className="relative z-[-99px]">
        <Swiper
          slidesPerView={1}
          navigation={{ nextEl: ".right-arrow", prevEl: ".left-arrow" }}
          modules={[Navigation]}
        >
          {apartment?.images?.map((item, _id) => (
            <SwiperSlide key={_id} className="h-full">
              <img
                src={scrImage || item}
                width={"100%"}
                alt="logo"
                className="object-cover h-[100vh]"
              />
            </SwiperSlide>
          ))}
        </Swiper>

          <div className="swiper-arrows">
          <div className="left-arrow absolute p-2 md:p-4 transition-all duration-1000 cursor-pointer rounded-md left-[25px] md:left-[40px] top-[40%] z-10 hover:bg-white/65">
          <IoIosArrowBack className="text-[25px] text-secondary-color" />
          </div>
          <div className="right-arrow p-2 md:p-4 transition-all duration-1000 cursor-pointer absolute top-[40%] rounded-md right-[25px] md:right-[40px] z-10 hover:bg-white/65">
          <IoIosArrowForward className="text-[25px] text-secondary-color"/>
          </div>
        </div>
        <div className="flex flex-col justify-center w-full items-center  shrink-0 absolute left-0 bottom-[17%] max-[770px]:hidden overflow-auto">
          <div className="container flex gap-4 pb-12">
            {apartment?.images?.map((item, _id) => (
              <div
                className="md:w-[25%]"
                key={_id}
                onClick={() => setScrImage(item)}
              >
                <img
                  src={item}
                  alt=""
                  className="object-cover w-full h-auto cursor-pointer"
                  style={{ display: "block", border: "4px solid white" }}
                />
              </div>
            ))}
          </div>
        </div>
        <div
          className="bg-black/50 absolute left-0 bottom-[4%] w-full px-[50px]
        max-[770px]:hidden  text-white p-4 z-20"
        >
          <div className="flex justify-between py-4">
            <div>
              <p className="font-bold pb-2 text-2xl">{apartment?.name}</p>
              <p>{apartment?.address}</p>
            </div>
            <div>
              <p>For sale</p>
              <p className="text-secondary-color text-[22px] font-semibold">
                {" "}
                ${apartment?.price}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-bg-third py-8 min-[770px]:hidden">
        <div className="flex flex-col justify-center items-center py-4 text-center gap-3">
          <div>
            <p className="font-bold pb-2 text-2xl">{apartment?.name}</p>
            <p className="text-text-secondary text-[15px]">
              {apartment?.address}
            </p>
          </div>
          <div>
            <p>For sale</p>
            <p className="text-secondary-color text-[22px] font-semibold">
              {" "}
              ${apartment?.price}
            </p>
          </div>
        </div>
      </div>

      <DetailItem apartment={apartment} />
      <AdditionalDetails apartment={apartment} />
      <CommonNote note={apartment?.Note} />
      <Features Feature={apartment?.Features} />
      <FloorPlans RealEstate={apartment} />
      <VirtualTour virtual={apartment?.virtual} />

      <PropertyMap Src={apartment?.maP} />
      <div className="py-8 text-[15px] bg-bg-third">
        <div className="container flex gap-5 flex-wrap-reverse">
          <FormContact valueSub={"Send Message"} />
          <AgentContact agent={agent} _id={apartment?.agentId} />
        </div>
      </div>
      <ScheduleTour />
    </div>
      </HelmetProvider>
  );
}

/*
<img
src={scrImage || apartment?.img}
width={"100%"}
alt=""
className="object-cover"
/>
*/
