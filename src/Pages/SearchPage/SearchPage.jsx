import { useDispatch, useSelector } from "react-redux";
import Search from "../../Components/Search/Search";
import BannerPages from "../BannerPages/BannerPages";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import { fetchProducts } from "../../rtk/slices/RealestateSlice";
import RealEstateItems from "../../Components/RealEstateItems/RealEstateItems";
export default function SearchPage() {
  const { realestate } = useSelector((state) => state.Realestate);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <HelmetProvider>
      <Helmet>
        <title>Search</title>
      </Helmet>
      <BannerPages item={"Search"} />
      <Search changeTop="-top-28" />
      <div className="container pb-20 flex gap-8 text-[15px] flex-col">
      {realestate?.map((items, _id) => (
        <div className="shadow-md my-5" key={_id}>
          <RealEstateItems items={items} />
        </div>
      ))}
      </div>
    </HelmetProvider>
  );
}
