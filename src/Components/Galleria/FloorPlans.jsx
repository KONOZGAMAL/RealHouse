import PropTypes from "prop-types";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import "./Plans.css";
const FloorPlans = ({ RealEstate }) => {
  const [openQ, setOpenQ] = useState(null);
  const toggleOpenQ = (id) => {
    if (openQ === id) {
      setOpenQ(null);
    } else {
      setOpenQ(id);
    }
  };
  return (
    <div className="py-8 bg-white floor-plans">
      <div className="container text-[15px] flex flex-col gap-4">
        <p className="text-secondary-color text-[18px] font-bold">
          Floor Plans
        </p>
        <div className="flex flex-col w-full">
          <div className="duration-700 transition-all">
            <div
              className=" flex gap-3 text-[15px] font-[500] white-space-nowrap leading-[2.5]
                 duration-200 m-0"
            >
              <div className="flex flex-col w-full gap-5">
                {RealEstate?.Floor_Plans.map(
                  (plan, index) =>
                    plan?.name !== undefined && (
                      <div
                        key={index}
                        className="border border-[#d2d0d0] md:mx-0 mx-5"
                      >
                        <div className="flex flex-col w-full">
                          <div
                            className="flex justify-between flex-wrap bg-[#eee] items-center border-[#d2d0d0] 
                  border-b p-3 cursor-pointer"
                            onClick={() => toggleOpenQ(index)}
                          >
                            <div className="flex gap-2 items-center">
                              {openQ === index ? (
                                <div className="font-semibold">
                                  <FaMinus />
                                </div>
                              ) : (
                                <div className="font-semibold">
                                  <FaPlus />
                                </div>
                              )}
                              <span className="font-[500] leading-[2.5]">{`${plan?.name}`}</span>
                            </div>
                            <div className="flex gap-2 pr-2 text-[13px]">
                              <p className="border-r-2 border-text-secondary pr-2">
                                {`${plan?.area} sq ft`}
                              </p>
                              {plan?.Bedroom !== "undefined" && (
                                <p className="border-r-2 border-text-secondary pr-2">
                                  {`${plan?.Bedroom} Bedrooms`}
                                </p>
                              )}
                              {plan?.Bathroom !== "undefined" && (
                                <p>{`${plan?.Bathroom} Bathrooms`}</p>
                              )}
                            </div>
                          </div>
                          <div
                            className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                              openQ === index ? "max-h-screen" : "max-h-0"
                            }`}
                          >
                            {openQ === index && (
                              <div className="text-[14px] font-[500] white-space-nowrap duration-200 p-5">
                                <p className="m-0 text-text-secondary my-5 leading-[2]">
                                  {plan?.details}
                                </p>
                                <img
                                  loading="lazy"
                                  src={plan?.img}
                                  alt={plan?.name}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorPlans;

FloorPlans.propTypes = {
  RealEstate: PropTypes.shape({
    Floor_Plans: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        area: PropTypes.string,
        Bedroom: PropTypes.number,
        Bathroom: PropTypes.number,
        img: PropTypes.string,
        details: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
};
