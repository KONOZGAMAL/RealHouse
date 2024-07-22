import Search from "../../Components/Search/Search";
import BannerPages from "../BannerPages/BannerPages";
import FormContact from "../Contact/FormContact";
import Card from "../../Components/Card/Card";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import RealEstateItems from "../../Components/RealEstateItems/RealEstateItems";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAgentsById } from "../../rtk/slices/AgentsSlice";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../rtk/slices/RealestateSlice";

export default function AgentDetails() {
  const { agent } = useSelector((state) => state.agents);
  const { realestate } = useSelector((state) => state.Realestate);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getAgentsById(id));
    dispatch(fetchProducts());
  }, [dispatch, id]);
  return (
    <div>
      <BannerPages item={"Melissa William"} />
      <Search changeTop="-top-28" />
      <div className="container">
        <div className="flex gap-10 flex-wrap my-10">
          <div className="flex flex-col gap-10 w-[550px] grow mt-6">
            <div className="bg-white shadow-md p-5">
              <div className="">
                <img
                  src={agent?.img}
                  alt=""
                  width={"138px"}
                  className="size-[138px] -mt-[60px]"
                />
                <div className="flex justify-between py-4 w-[80%] flex-wrap">
                  <div className="py-2">
                    <h3 className="text-[24px] font-bold">{agent?.name}</h3>
                    <p>
                      <span className="text-secondary-color font-bold">
                        {agent?.realEstate}
                      </span>{" "}
                      Listed Properties
                    </p>
                  </div>
                  <ul className="flex  text-[22px] transition-all text-text-secondary gap-3 mr-3">
                    <li className=" cursor-pointer hover:text-blue-900">
                      <FaFacebook />
                    </li>
                    <li className="hover:text-blue-600 cursor-pointer">
                      <FaTwitter />
                    </li>
                    <li className="hover:text-blue-700 cursor-pointer">
                      <FaLinkedin />
                    </li>
                    <li className="hover:text-red-300 cursor-pointer">
                      <FaInstagram />
                    </li>
                    <li className="hover:text-red-700 cursor-pointer">
                      <FaYoutube />
                    </li>
                  </ul>
                </div>
                <p className="text-text-secondary leading-[1.9]">
                  {agent?.details}
                </p>
                <div className="text-[15px] flex flex-col gap-3 py-3">
                  <div className="flex gap-3 w-full flex-wrap">
                    <p>
                      <span className="text-text-secondary">Office: </span>{" "}
                      {agent?.Office}
                    </p>
                    <p>
                      <span className="text-text-secondary">Mobile: </span>
                      {agent?.Mobile}
                    </p>
                  </div>
                  <div className="flex gap-3 w-full flex-wrap">
                    <p>
                      <span className="text-text-secondary">Fax: </span>{" "}
                      {agent?.Fax}
                    </p>
                    <p>
                      <span className="text-text-secondary">WhatsApp: </span>
                      {agent?.WhatsApp}
                    </p>
                  </div>
                  <p>
                    <span className="text-text-secondary">Email: </span>
                    {agent?.Email}
                  </p>
                </div>
                <div>
                  <hr />
                  <div className="py-4">
                    <FormContact />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-secondary-color font-bold">My Listingg</p>
            {realestate?.map(
              (items, _id) =>
                items?.agentId === id && (
                  <div className="shadow-md my-1" key={_id}>
                    <RealEstateItems items={items} />
                  </div>
                )
            )}
          </div>
          <div>
            {realestate?.map(
              (items, _id) =>
                items?.agentId == id &&
                items?.Featured && (
                  <div key={_id}>
                    <p className="text-[22px]">Featured Properties</p>
                    <Card items={items} />
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

