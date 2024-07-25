import { useDispatch, useSelector } from "react-redux";
import Search from "../../Components/Search/Search";
import BannerPages from "../BannerPages/BannerPages";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import { fetchProducts } from "../../rtk/slices/RealestateSlice";
import RealEstateItems from "../../Components/RealEstateItems/RealEstateItems";
import { Link, useSearchParams } from "react-router-dom";
import image from "../../../public/assets/noData.webp";
export default function SearchPage() {
  const { realestate } = useSelector((state) => state.Realestate);
  let [searchParams, setSearchParams] = useSearchParams();
  let location = searchParams.get("location")?.split(",") || ["All Locations"];
  let propertyStatus = searchParams.get("PropertyStatus") || "any";
  let propertyType = searchParams.get("PropertyType")?.split(",") || [
    "All Types",
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredRealestate = realestate?.filter((item) => {
    const matchesLocation =
      location.includes("All Locations") || location.includes(item.location);
    const matchesPropertyStatus =
      propertyStatus === "any" || item.type === propertyStatus;
    const matchesPropertyType =
      propertyType.includes("All Types") ||
      propertyType.includes(item.typeRealEstate);
    return matchesLocation && matchesPropertyStatus && matchesPropertyType;
  });
  return (
    <HelmetProvider>
      <Helmet>
        <title>Search</title>
      </Helmet>
      <BannerPages item={"Search"} />
      <Search changeTop="-top-28" />
      <div className="container pb-20 flex gap-8 text-[15px] flex-col">
        {filteredRealestate.length === 0 ? (
          <div className="flex justify-center flex-col items-center w-full">
            <img
              loading="lazy"
              alt="no data found"
              src={image}
              width="100%"
              className="max-w-[400px] h-[250px]"
              height="350px"
            />
            <p className="font-bold text-[18px] text-secondary-color">
              No Data Found
            </p>
            <Link
              className="font-bold w-fit text-[19px] text-white px-6 py-1 hover:bg-primary-color/80 bg-primary-color rounded-md mt-4"
              to="/search"
              onClick={() => setSearchParams({})}
            >
              Clear Filter
            </Link>
          </div>
        ) : (
          filteredRealestate?.map((items, _id) => (
            <div className="shadow-md my-5" key={_id}>
              <RealEstateItems items={items} />
            </div>
          ))
        )}
      </div>
    </HelmetProvider>
  );
}
