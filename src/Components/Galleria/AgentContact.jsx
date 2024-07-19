import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
export default function AgentContact({ agent, _id }) {
  return (
    <div className="flex flex-col gap-4 grow w-[350px]">
      <div className="flex gap-3">
        <img src={agent?.img} alt="logo" className="size-[126px]" />
        <div>
          <Link
            to={`/agent/${_id}`}
            className="p-0 text-[19px] hover:text-primary-color font-bold max-[404px]:w-full block"
          >
            {agent?.name}
          </Link>
          <Link
            to={`/agent/${_id}`}
            className="p-0 text-primary-color hover:text-secondary-color font-bold hover:underline pb-3 max-[404px]:w-full"
          >
            View My Listing
          </Link>
        </div>
      </div>
      <p className="text-text-secondary leading-[2] line-clamp-2 h-[57px] overflow-hidden max-[404px]:text-center">
        {agent?.details}
      </p>
      <div className="flex flex-col gap-3 font-semibold">
        <p className="text-text-secondary">
          Fax : <span className="text-black">{agent?.Fax}</span>
        </p>
        <p className="text-text-secondary">
          WhatsApp : <span className="text-black">{agent?.WhatsApp}</span>
        </p>
        <p className="text-text-secondary">
          Email : <span className="text-black">{agent?.Email}</span>
        </p>
        <p className="text-text-secondary">
          Office : <span className="text-black">{agent?.Office}</span>
        </p>
        <p className="text-text-secondary">
          Mobile : <span className="text-black">{agent?.Mobile}</span>
        </p>
        <div className="text-text-secondary flex gap-2">
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
      </div>
    </div>
  );
}
AgentContact.propTypes = {
  agent: PropTypes.shape({
    img: PropTypes.string,
    name: PropTypes.string,
    Mobile: PropTypes.string,
    Office: PropTypes.string,
    Email: PropTypes.string,
    WhatsApp: PropTypes.string,
    Fax: PropTypes.string,
    details: PropTypes.string,
  }).isRequired,
  _id: PropTypes.string,
};
