import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addItemToWishlist,
  removeItemFromWishlist,
} from "../../rtk/slices/authSlice";

export default function RealEstateItems({ items }) {
  const [activeHeart, setActiveHeart] = useState(false);
  const dispatch = useDispatch();
  const idUser = localStorage.getItem("idUser");

  const addItemsToWishlist = () => {
    dispatch(addItemToWishlist({ userId: idUser, item: items }));
    setActiveHeart(true);
  };

  const removeItemsFromWishlist = () => {
    dispatch(removeItemFromWishlist({ userId: idUser, item: items }));
    setActiveHeart(false);
  };

  return (
    <div className="flex flex-col gap-5 grow">
      <div className="flex gap-3 bg-white shadow-md max-[768px]:flex-wrap">
        <div className="relative max-[768px]:grow max-[768px]:max-h-[445px] w-[215px]">
          <img
            src={items?.img}
            className="h-full"
            width={"100%"}
            height="auto"
          />
          {items?.Featured && (
            <div className="top-[-14px] left-0 bg-primary-color absolute text-white">
              <div
                className="relative after:content-[''] px-3 py-1 after:absolute
           after:right-[-32px] after:top-0 after:border-[16.7px] after:border-transparent
            after:border-l-primary-color"
              >
                <span>Featured</span>
              </div>
            </div>
          )}
          <div className="flex justify-between px-3 -mt-12">
            {items?.Hot && (
              <span className="py-1 px-3 text-white bg-red-500 rounded">
                Hot
              </span>
            )}
            {items?.Trendy && (
              <span className="py-1 px-3 text-white bg-secondary-color rounded">
                Trendy
              </span>
            )}
            <span
              onClick={() =>
                activeHeart ? removeItemsFromWishlist() : addItemsToWishlist()
              }
              className={`text-[28px] cursor-pointer hover:text-red-500 ${
                activeHeart ? "text-red-500" : "text-white"
              }`}
            >
              <FaHeart />
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-5 w-80 grow border-r max-[570px]:border-b max-[570px]:border-r-0">
          <Link
            to={`/Realestate/${items?.id}`}
            className="text-[19px] font-bold hover:text-secondary-color p-0 my-3"
          >
            {items?.name}
          </Link>
          <p className="text-text-secondary text-[14px] line-clamp-1 h-[26px] overflow-hidden">
            {items?.details}
          </p>
          <div className="flex gap-2 my-2">
            {items?.Bedrooms !== "undefined" && (
              <div className="font-bold">
                <p className="mb-2 text-[14px]">Bedrooms</p>
                <p className="flex items-center gap-2">
                  <svg
                    className="ov-icon text-text-secondary text-[2.16em]"
                    aria-hidden="true"
                    width="34.56"
                    height="34.56"
                    viewBox="0.48 0.48 23.04 23.04"
                    fill="currentColor"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 8.5h6v2H9zM15.64 12H8.37a.87.87 0 00-.87.87h.01V14h9v-1.13a.87.87 0 00-.87-.87z"></path>
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2.75 15c-.41 0-.75-.34-.75-.75v-.75h-9v.75c0 .41-.34.75-.75.75S6 16.66 6 16.25v-3.38c0-1 .62-1.85 1.5-2.2V9c0-1.1.9-2 2-2h5c1.1 0 2 .9 2 2v1.67c.88.35 1.5 1.2 1.5 2.2v3.38c0 .41-.34.75-.75.75z"></path>
                  </svg>
                  {items?.Bedrooms}
                </p>
              </div>
            )}
            {items?.Bathrooms !== "undefined" && (
              <div className="font-bold">
                <p className="mb-2 text-[14px]">Bathrooms</p>
                <p className="flex items-center gap-2">
                  <svg
                    className="ov-icon text-text-secondary text-[2.16em]"
                    aria-hidden="true"
                    width="34.56"
                    height="34.56"
                    viewBox="0.48 0.48 23.04 23.04"
                    fill="currentColor"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path
                      d="M4 20h16V4H4v16zm5-2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm3 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm3 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-8-4c0-2.76 2.24-5 5-5s5 2.24 5 5v1H7v-1z"
                      opacity=".3"
                    ></path>
                    <circle cx="15" cy="14" r="1"></circle>
                    <circle cx="12" cy="14" r="1"></circle>
                    <circle cx="15" cy="17" r="1"></circle>
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16z"></path>
                    <path d="M17 11c0-2.76-2.24-5-5-5s-5 2.24-5 5v1h10v-1zm-8.46-.5c.24-1.69 1.7-3 3.46-3s3.22 1.31 3.47 3H8.54z"></path>
                    <circle cx="9" cy="17" r="1"></circle>
                    <circle cx="9" cy="14" r="1"></circle>
                    <circle cx="12" cy="17" r="1"></circle>
                  </svg>{" "}
                  {items?.Bathrooms}
                </p>
              </div>
            )}
            {items?.Area !== "undefined" && (
              <div className="font-bold">
                <p className="mb-2 text-[14px]">Area</p>
                <p className="flex items-center gap-2">
                  <svg
                    className="ov-icon text-text-secondary text-[2.16em]"
                    aria-hidden="true"
                    width="34.56"
                    height="34.56"
                    viewBox="-51.2 -51.2 614.4 614.4"
                    fill="currentColor"
                  >
                    <path
                      fill="var(--ci-primary-color, currentColor)"
                      d="M440 440h32v32h-32zM306.182 440h33.455v32h-33.455zM172.364 440h33.455v32h-33.455zM373.091 440h33.455v32h-33.455zM105.455 440h33.455v32h-33.455zM472 40H56a16 16 0 00-16 16v416h32V72h400zM440 373.091h32v33.454h-32zM440 306.182h32v33.454h-32zM440 105.454h32v33.454h-32zM440 172.363h32v33.454h-32zM440 239.272h32v33.455h-32zM239.272 440h33.455v32h-33.455z"
                      className="ci-primary"
                    ></path>
                  </svg>{" "}
                  {items?.Area}{" "}
                  <span className="text-text-secondary">Sq Ft</span>
                </p>
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-between py-5 w-[200px] text-[13px] font-bold max-[768px]:pt-0 pl-3 h-full">
            <div>
              <p>For sale</p>
              <p className="text-secondary-color text-[22px] font-semibold">
                {items?.price}
              </p>
            </div>
            <div>
              <p className="text-text-secondary">By</p>
              <p>{items?.agent}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

RealEstateItems.propTypes = {
  items: PropTypes.shape({
    img: PropTypes.string,
    Featured: PropTypes.bool,
    Hot: PropTypes.bool,
    Trendy: PropTypes.bool,
    name: PropTypes.string,
    id: PropTypes.string,
    details: PropTypes.string,
    Bedrooms: PropTypes.string,
    Bathrooms: PropTypes.string,
    Area: PropTypes.string,
    price: PropTypes.string,
    agent: PropTypes.string,
  }).isRequired,
};
