import PropTypes from "prop-types";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoCheckmarkDone } from "react-icons/io5";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
export default function Search({ changeTop }) {
  const [open, setOpen] = useState(false);
  const [Location, setLocation] = useState(false);
  const [propertyStatus, setPropertyStatus] = useState(false);
  const [propertyType, setPropertyType] = useState(false);
  const [LocationValue, setLocationValue] = useState([
    "Miami",
    "Little Havana",
    "Doral",
  ]);
  const [propertyStatusValue, setPropertyStatusValue] = useState([
    "Any",
    "Rent",
    "Sale",
  ]);
  const [propertyTypeValue, setPropertyTypeValue] = useState([
    "Home","Villa","Apartment","Restaurant","Office"
  ]);
  const toggleDropdown = (setDropdown) => {
    setLocation(!Location);
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

  return (
    <div className={`container relative ${changeTop} -top-14`}>
      <div className="flex transition-none bg-white shadow-sm border-[.5px] border-text-secondary/10 min-h-[95px] items-stretch flex-wrap border-t-0">
        <div className="grow-[3] flex flex-col">
          <div className="flex flex-wrap grow">
            <div className="justify-center flex gap-2 flex-col w-[264px] border-text-secondary/10 border-[.5px] py-3 px-6 grow relative">
              <p className="text-[14px] font-bold">Location</p>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setLocation(!Location)}
              >
                <p className="text-bg-secondary font-semibold text-[15px]">
                  All Locations
                </p>
                <div>
                  <span className="text-bg-secondary font-semibold text-[15px]"></span>
                </div>
                <p className="text-bg-secondary font-semibold text-[15px]"></p>
                <MdOutlineKeyboardArrowDown />
              </div>
              {Location && !open  && (
                <div className="absolute left-0 top-[85px] w-[100.3%] bg-secondary-color text-white pt-3 z-30">
                  <div className="flex justify-center items-center border-white border mx-2 mb-2">
                    <p className="p-2 text-white text-center grow hover:bg-Third-color cursor-pointer flex justify-center">
                      <IoCheckmarkDone className="text-white" />
                    </p>
                    <p className="p-2 text-white text-center grow hover:bg-Third-color cursor-pointer flex justify-center">
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
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setPropertyStatus(!propertyStatus)}
              >
                <p className="text-bg-secondary font-semibold text-[15px]">
                  Any
                </p>
                <div>
                  <span className="text-bg-secondary font-semibold text-[15px]"></span>
                </div>
                <p className="text-bg-secondary font-semibold text-[15px]"></p>
                <MdOutlineKeyboardArrowDown />
              </div>
              {propertyStatus && !open  && (
                <div className="absolute left-0 top-[85px] w-[100.3%] pt-3 bg-secondary-color text-white z-30">
                  {propertyStatusValue.map((item, _id) => (
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
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setPropertyType(!propertyType)}
              >
                <p className="text-bg-secondary font-semibold text-[15px]">
                  All Types
                </p>
                <div>
                  <span className="text-bg-secondary font-semibold text-[15px]"></span>
                </div>
                <p className="text-bg-secondary font-semibold text-[15px]"></p>
                <MdOutlineKeyboardArrowDown />
                {propertyType && !open && (
                  <div className="absolute left-0 top-[85px] w-[100.3%] bg-secondary-color text-white pt-3 z-30">
                    <div className="flex justify-center items-center border-white border mx-2 mb-2">
                      <p className="p-2 text-white text-center grow hover:bg-Third-color cursor-pointer flex justify-center">
                        <IoCheckmarkDone className="text-white" />
                      </p>
                      <p className="p-2 text-white text-center grow hover:bg-Third-color cursor-pointer flex justify-center">
                        <IoReturnUpBackOutline className="text-white" />
                      </p>
                    </div>
                    {propertyTypeValue.map((item, _id) => (
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
            </div>
            <div className=" flex justify-center items-center bg-secondary-color cursor-pointer transition-all duration-1000 hover:bg-Third-color text-white w-[264px] border-text-secondary/10 border-[.5px] py-3 px-6 grow">
              <button className="flex items-center justify-center gap-3 text-[22px]">
                <IoSearch />
                Search
              </button>
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
