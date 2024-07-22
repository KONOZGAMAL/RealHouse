
import { Link } from "react-router-dom";
import Search from "../../Components/Search/Search";
import BannerPages from "../BannerPages/BannerPages";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAgents } from "../../rtk/slices/AgentsSlice";
import { Helmet, HelmetProvider } from 'react-helmet-async';
export default function Agents() {
  const { agents } = useSelector((state) => state.agents);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAgents());
  }, [dispatch]);
  return (
    <HelmetProvider>
    <Helmet>
      <title>Agents</title>
    </Helmet>
    <div>
      <BannerPages item={"Our Agents"} />
      <Search changeTop="-top-28" />
      <div className="flex flex-col gap-3 container">
        {agents?.map((items, _id) => (
          <div key={_id} className="font-[400] bg-white p-5 my-12">
            <div className="flex items-end flex-wrap justify-center md:justify-start gap-2">
              <img
                src={items?.img}
                alt=""
                width={"138px"}
                className="size-[138px] -mt-[60px]"
              />
              <div>
                <Link
                  to={`/agent/${items?.id}`}
                  className="text-[21px] font-bold hover:text-primary-color p-0"
                >
                  {items?.name}
                </Link>
                <ul className="flex  text-[22px] transition-all text-text-secondary gap-2 mt-2">
                  <li className="hover:text-red-700 cursor-pointer">
                    <FaFacebook />
                  </li>
                  <li className="hover:text-red-700 cursor-pointer">
                    <FaTwitter />
                  </li>
                  <li className="hover:text-red-700 cursor-pointer">
                    <FaLinkedin />
                  </li>
                  <li className="hover:text-red-700 cursor-pointer">
                    <FaInstagram />
                  </li>
                  <li className="hover:text-red-700 cursor-pointer">
                    <FaYoutube />
                  </li>
                </ul>
              </div>
            </div>
            <p
              className="text-text-secondary text-[14px] leading-[2] line-clamp-3 h-[105px] overflow-hidden py-6
      max-[404px]:text-center"
            >
              {items?.details}
            </p>
            <div className="flex justify-between flex-wrap my-5 gap-3">
              <div className="text-[15px] flex flex-col gap-3 grow">
                <div className="flex gap-3 w-full flex-wrap">
                  <p>
                    <span className="text-text-secondary">Office: </span>{" "}
                    {items?.Office}
                  </p>
                  <p>
                    <span className="text-text-secondary">Mobile: </span>
                    {items?.Mobile}
                  </p>
                </div>
                <div className="flex gap-3 w-full flex-wrap">
                  <p>
                    <span className="text-text-secondary">Fax: </span>{" "}
                    {items?.Fax}
                  </p>
                  <p>
                    <span className="text-text-secondary">WhatsApp: </span>
                    {items?.WhatsApp}
                  </p>
                </div>
                <p>
                  <span className="text-text-secondary">Email: </span>
                  {items?.Email}
                </p>
              </div>
              <div>
                <Link
                   to={`/agent/${items?.id}`}
                  className="font-bold text-primary-color hover:text-secondary-color hover:underline pb-3"
                >
                  View My Listing
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </HelmetProvider>
  );
}
