import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import ScrollTop from "../ScrollTop/ScrollTop";

export default function Footer() {
  return (
    <div className="bg-bg-secondary w-full h-full">
      <div className="container p-7">
        <div className="flex justify-between items-center flex-wrap gap-3">
          <img src="./assets/logo.webp" alt="logo" />
          <ul className="flex  text-[22px] transition-all text-text-secondary gap-3 mr-3">
            <li className="hover:text-white cursor-pointer">
              <FaFacebook />
            </li>
            <li className="hover:text-white cursor-pointer">
              <FaTwitter />
            </li>
            <li className="hover:text-white cursor-pointer">
              <FaLinkedin />
            </li>
            <li className="hover:text-white cursor-pointer">
              <FaInstagram />
            </li>
            <li className="hover:text-white cursor-pointer">
              <FaYoutube />
            </li>
          </ul>
        </div>
        <p className="font-bold text-white pt-8 text-[22px]">Contact Us</p>
        <div className="flex justify-between items-center text-[15px] gap-5 flex-wrap">
          <ul className="text-text-secondary flex flex-col gap-4">
            <li className="flex items-center gap-3">
              <FaTwitter />
              <span>3015 Grand Ave, Coconut Grove, Merrick Way, FL 12345</span>
            </li>
            <li className="flex items-center gap-3">
              <FaFacebook />
              <span>+123-456-789</span>
            </li>
            <li className="flex items-center gap-3">
              <FaFacebook />
              <span>sales@example.com</span>
            </li>
          </ul>
          <div className="flex flex-col gap-4 md:w-1/2 sm:w-full">
            <p className="text-white font-bold">Remain Updated</p>
            <input
              className="p-4 h-[40px] focus:outline-none "
              type="text"
              placeholder="Your email address"
            />
            <button className="rounded-none w-fit bg-primary-color border-primary-color 
            hover:bg-transparent hover:border-primary-color border-2 text-white px-6 py-3">
              Sign Up
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center text-text-secondary mt-4 flex-wrap">
          <p>© 2024. All rights reserved.</p>
          <p className="mr-9">Created by Konuz</p>
        </div>
        <ScrollTop/>
      </div>
    </div>
  );
}
