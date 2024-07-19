import PropTypes from "prop-types";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoCheckmarkDone } from "react-icons/io5";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { useState } from "react";
export default function Search({ changeTop }) {
  const [Location, setLocation] = useState(false);
  const [MinPrice, setMinPrice] = useState(false);
  const [MaxPrice, setMaxPrice] = useState(false);
  const [Agent, setAgent] = useState(false);
  const [Baths, setBaths] = useState(false);
  const [Garages, setGarages] = useState(false);
  const [Beds, setBeds] = useState(false);
  const [propertyStatus, setPropertyStatus] = useState(false);
  const [propertyType, setPropertyType] = useState(false);
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const [LocationValue, setLocationValue] = useState([]);
  const [propertyStatusValue, setPropertyStatusValue] = useState("Any");
  const [propertyTypeValue, setPropertyTypeValue] = useState([]);
  const [BedsValue, setBedsValue] = useState("Any");
  const [BathsValue, setBathsValue] = useState("Any");
  const [MinPriceValue, setMinPriceValue] = useState("Any");
  const [MaxPriceValue, setMaxPriceValue] = useState("Any");
  const [GaragesValue, setGaragesValue] = useState("Any");
  const [AgentValue, setAgentValue] = useState([]);
  const toggleDropdown = (setDropdown) => {
    setLocation(false);
    setMinPrice(false);
    setMaxPrice(false);
    setAgent(false);
    setBaths(false);
    setGarages(false);
    setBeds(false);
    setPropertyStatus(false);
    setPropertyType(false);
    setDropdown((prev) => !prev);
  };

  // const handleLocationClick = () => {
  //   setLocationValue([]);
  // };

  // const handleSelectLocation = (select) => {
  //   setLocationValue((prev) =>
  //     prev.includes(select)
  //       ? prev.filter((item) => item !== select)
  //       : [...prev, select]
  //   );
  // };

  // const handleSelectPropertyStatus = (status) => {
  //   setPropertyStatusValue(status);
  // };

  // const handleSelectPropertyType = (select) => {
  //   setPropertyTypeValue((prev) =>
  //     prev.includes(select)
  //       ? prev.filter((item) => item !== select)
  //       : [...prev, select]
  //   );
  // };

  // const handleSelectBeds = (select) => {
  //   setBedsValue(select);
  // };

  // const handleSelectBaths = (select) => {
  //   setBathsValue(select);
  // };

  // const handleSelectMinPrice = (select) => {
  //   setMinPriceValue(select);
  // };

  // const handleSelectMaxPrice = (select) => {
  //   setMaxPriceValue(select);
  // };

  // const handleSelectGarages = (select) => {
  //   setGaragesValue(select);
  // };

  // const handleSelectAgent = (select) => {
  //   setAgentValue((prev) =>
  //     prev.includes(select)
  //       ? prev.filter((item) => item !== select)
  //       : [...prev, select]
  //   );
  // };

  return (
    <div className={`container relative ${changeTop} -top-14`}>
      <div className="flex transition-none bg-white shadow-sm border-[.5px] border-text-secondary/10 min-h-[95px] items-stretch flex-wrap border-t-0">
        <div className="grow-[3] flex flex-col">
          <div className="flex flex-wrap grow">
            <div className="justify-center flex gap-2 flex-col w-[264px] border-text-secondary/10 border-[.5px] py-3 px-6 grow relative">
              <p className="text-[14px] font-bold">Location</p>
              <div className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleDropdown(setLocation)} >
                <p className="text-bg-secondary font-semibold text-[15px]">
                  All Locations
                </p>
                <div>
                  <span className="text-bg-secondary font-semibold text-[15px]">
                 ,
                  </span>
                </div>
                <p className="text-bg-secondary font-semibold text-[15px]">
                  Locations Selected
                </p>
                <MdOutlineKeyboardArrowDown />
              </div>
              {!open && (
                <div className="absolute left-0 top-[75px] w-[100.3%] bg-secondary-color text-white z-30">
                  <div className="flex justify-center items-center border-white border mx-2 mb-2">
                    <p className="p-1 text-white text-center grow hover:bg-Third-color cursor-pointer flex justify-center">
                      <IoCheckmarkDone className="text-white" />
                    </p>
                    <p className="p-1 text-white text-center grow hover:bg-Third-color cursor-pointer flex justify-center">
                      <IoReturnUpBackOutline className="text-white" />
                    </p>
                  </div>
                  {LocationValue.map((item, _id) => (
                    <p
                      key={_id}
                      className="py-2 cursor-pointer px-6 hover:bg-Third-color"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              )}
            </div>
            <div className="justify-center flex gap-2 flex-col w-[264px] border-text-secondary/10 border-[.5px] py-3 px-6 grow relative">
              <p className="text-[14px] font-bold">Property Status</p>
              <div className="flex justify-between items-center cursor-pointer" onClick={() => setOpen(open)}>
              <p className="text-bg-secondary font-semibold text-[15px]">
                All Locations
              </p>
              <div>
                <span className="text-bg-secondary font-semibold text-[15px]">
                  ,
                </span>
              </div>
              <p className="text-bg-secondary font-semibold text-[15px]">
                Locations Selected
              </p>
              <MdOutlineKeyboardArrowDown />
            </div>
            {!open && (
              <div className="absolute left-0 top-[75px] w-[100.3%] bg-secondary-color text-white z-30">
                <div className="flex justify-center items-center border-white border mx-2 mb-2">
                  <p className="p-1 text-white text-center grow hover:bg-Third-color cursor-pointer flex justify-center">
                    <IoCheckmarkDone className="text-white" />
                  </p>
                  <p className="p-1 text-white text-center grow hover:bg-Third-color cursor-pointer flex justify-center">
                    <IoReturnUpBackOutline className="text-white" />
                  </p>
                </div>
                {LocationValue.map((item, _id) => (
                  <p
                    key={_id}
                    className="py-2 cursor-pointer px-6 hover:bg-Third-color"
                  >
                    {item}
                  </p>
                ))}
              </div>
            )}
            </div>
            <div className="justify-center flex gap-2 flex-col w-[264px] border-text-secondary/10 border-[.5px] py-3 px-6 grow relative">
              <p className="text-[14px] font-bold">Property Type</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

  
Search.propTypes = {
  changeTop: PropTypes.string,
};

