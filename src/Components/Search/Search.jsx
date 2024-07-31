import PropTypes from "prop-types";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {
  IoCheckmarkDone,
  IoReturnUpBackOutline,
  IoSearch,
} from "react-icons/io5";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export default function Search({ changeTop }) {
  const [loca, setLoca] = useState(false);
  const [type, setType] = useState(false);
  const [status, setStatus] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const handleSubmit = () => {
    const params = {
      location:
        selectedLocation.length === 0 ? "All Locations" : selectedLocation,
      PropertyStatus: selectedStatus.toLowerCase(),
      PropertyType:
        selectedpropertyType.length === 0 ? "All Types" : selectedpropertyType,
    };
    setSearchParams(params);
    navigate(`/search?${new URLSearchParams(params).toString()}`);
  };
  const LocationValue = ["Miami", "Little Havana", "Doral"];
  const propertyStatusValue = ["Any", "Rent", "Sale"];
  const propertyTypeValue = [
    "Home",
    "Villa",
    "Apartment",
    "Restaurant",
    "Office",
  ];
  const [openDropdown, setOpenDropdown] = useState(null);

  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedpropertyType, setSelectedpropertyType] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("Any");

  const handleSelectLocation = (select) => {
    setSelectedLocation((prev) =>
      prev.includes(select)
        ? prev.filter((item) => item !== select)
        : [...prev, select]
    );
  };
  const handlepropertyType = (select) => {
    setSelectedpropertyType((prev) =>
      prev.includes(select)
        ? prev.filter((item) => item !== select)
        : [...prev, select]
    );
  };
  const handlepropertyStatus = (item) => {
    setSelectedStatus(item);
  };

  return (
    <div className={`container relative ${changeTop} -top-14`}>
      <div className="flex transition-none bg-white shadow-sm border-[.5px] border-text-secondary/10 min-h-[95px] items-stretch flex-wrap border-t-0">
        <div className="grow-[3] flex flex-col">
          <div className="flex flex-wrap grow">
            <div className="justify-center flex gap-1 p-2 flex-col w-[264px] border-text-secondary/10 border-[.5px] px-4 py-2 grow relative ">
              <p className="text-[14px] font-bold">Location</p>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => (setOpenDropdown("Location"), setLoca(!loca))}
              >
                <p className="text-bg-secondary font-semibold text-[15px]">
                  {selectedLocation.length !== 0
                    ? selectedLocation.map((loc, _id) => (
                        <span key={_id}>{loc} , </span>
                      ))
                    : "All Locations"}
                </p>
                <MdOutlineKeyboardArrowDown />
              </div>
              {openDropdown === "Location" && loca && (
                <div className="absolute left-0 top-[75px] w-[100.3%] bg-secondary-color text-white pt-3 z-30">
                  <div className="flex justify-center items-center border-white border mx-2 mb-2">
                    <p
                      className="p-2 text-white text-center grow hover:bg-Third-color cursor-pointer flex justify-center"
                      onClick={() => setSelectedLocation([])}
                    >
                      <IoCheckmarkDone className="text-white" />
                    </p>
                    <p className="p-2 text-white text-center grow hover:bg-Third-color cursor-pointer flex justify-center">
                      <IoReturnUpBackOutline className="text-white" />
                    </p>
                  </div>
                  {LocationValue.map((item, _id) => (
                    <p
                      key={_id}
                      className="py-2 cursor-pointer px-6 hover:bg-Third-color active:bg-Third-color"
                      onClick={() => handleSelectLocation(item)}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              )}
            </div>
            <div className="justify-center flex gap-1 p-2 flex-col w-[264px] border-text-secondary/10 border-[.5px] px-4 py-2 grow relative">
              <p className="text-[14px] font-bold">Property Status</p>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => (
                  setOpenDropdown("propertyStatus"), setStatus(!status)
                )}
              >
                <p className="text-bg-secondary font-semibold text-[15px]">
                  {selectedStatus}
                </p>
                <MdOutlineKeyboardArrowDown />
              </div>
              {openDropdown === "propertyStatus" && status && (
                <div className="absolute left-0 top-[75px] w-[100.3%] pt-3 bg-secondary-color text-white z-30">
                  {propertyStatusValue.map((item, _id) => (
                    <p
                      key={_id}
                      className="py-2 cursor-pointer px-6 hover:bg-Third-color"
                      onClick={() => handlepropertyStatus(item)}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              )}
            </div>
            <div className="justify-center flex gap-1 p-2 flex-col w-[264px] border-text-secondary/10 border-[.5px] px-4 py-2 grow relative">
              <p className="text-[14px] font-bold">Property Type</p>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => (
                  setOpenDropdown("propertyType"), setType(!type)
                )}
              >
                <p className="text-bg-secondary font-semibold text-[15px]">
                  {selectedpropertyType.length !== 0
                    ? selectedpropertyType.map((typ, _id) => (
                        <span key={_id}>{typ} , </span>
                      ))
                    : "All Types"}
                </p>
                <MdOutlineKeyboardArrowDown />
              </div>
              {openDropdown === "propertyType" && type && (
                <div className="absolute left-0 top-[75px] w-[100.3%] bg-secondary-color text-white pt-3 z-30">
                  <div className="flex justify-center items-center border-white border mx-2 mb-2">
                    <p
                      className="p-2 text-white text-center grow hover:bg-Third-color cursor-pointer flex justify-center"
                      onClick={() => setSelectedpropertyType([])}
                    >
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
                      onClick={() => handlepropertyType(item.toLowerCase())}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              )}
            </div>
            <div className="flex justify-center items-center bg-secondary-color cursor-pointer transition-all duration-1000 hover:bg-Third-color text-white w-[264px] border-text-secondary/10 border-[.5px] px-5 grow">
              <Link
                className="flex items-center justify-center gap-2 text-[20px]"
                onClick={() => handleSubmit()}
              >
                <IoSearch />
                Search
              </Link>
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
