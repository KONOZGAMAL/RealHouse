import Search from "../../Components/Search/Search";
import BannerPages from "../BannerPages/BannerPages";
import RealEstateItems from "../../Components/RealEstateItems/RealEstateItems";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../rtk/slices/RealestateSlice";
import { fetchAgents } from "../../rtk/slices/AgentsSlice";
import { Helmet, HelmetProvider } from 'react-helmet-async';
export default function Realestate() {
  const { realestate } = useSelector((state) => state.Realestate);
  const { agents } = useSelector((state) => state.agents);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchAgents());
  }, [dispatch]);
  return (
    <HelmetProvider>
    <Helmet>
      <title>RealEstate</title>
    </Helmet>
    <div>
      <BannerPages item={"Real Estates"} />
      <Search changeTop="-top-28" />
      <div className="container pb-20" 
      style={{transition: "all 3s ease !important"}}>
        <div className="flex gap-6 flex-wrap">
          <div className="grow">
            {realestate?.map((items, _id) => (
              <div className="shadow-md my-5" key={_id}>
                <RealEstateItems items={items} />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-5 grow justify-start">
            <p className="text-[22px]">Agents</p>
            {agents?.map((items, _id) => (
              <Link
                key={_id}
                to={`/agent/${items?.id}`}
                className="bg-white cursor-pointer flex min-[1198px]:flex-col
                min-[1198px]:justify-center items-center
                 gap-3 shadow-md group p-5 my-2">
                <img
                  src={items?.img}
                  className="rounded-full w-[100px] h-[100px] group-hover:scale-110"
                />
                <div className="min-[1198px]:text-center">
                  <p className="font-bold text-[18px]">{items?.name}</p>
                  <p>{items?.Email}</p>
                  <p>{items?.WhatsApp}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
    </HelmetProvider>
  );
}
