// fixed this code
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { RiMenu2Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import "./Header.css";
import { useEffect, useState } from "react";
import Modal from "../../Pages/Modal/Modal";
import MobileMenu from "../MobileMenu/MobileMenu";
import { fetchUsers, logout } from "../../rtk/slices/authSlice";
import { useDispatch } from "react-redux";
import useUserDetails from "../../Hooks/useUserDetails";
export default function Header() {
  const [openMenu, setOpenMenu] = useState(true);
  const [open, setOpen] = useState(true);
  const [openModel, setOpenModel] = useState(false);
  const [isLoginIn, setIsLoginIn] = useState(false);
  const token = localStorage.getItem("userToken");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userDetails } = useUserDetails();
  useEffect(() => {
    if (token) {
      setIsLoginIn(true);
      setOpenModel(false);
        dispatch(fetchUsers());
    } else {
      setIsLoginIn(false);
      setOpenModel(true);
    }
  }, [token, dispatch]);
  return (
    <>
      <header className="absolute top-0 left-0 w-full z-10 bg-hero-pattern text-white h-16 pt-3 Top-header">
        <div className="container py-4 flex items-center justify-between">
          <div className="logo">
            <img
              src="./assets/logo.webp"
              alt="logo"
              width="119px"
              height="62px"
            />
          </div>
          <div className="flex items-center gap-12 text-[19px] font-bold grow justify-end m-3">
            <ul className="hidden lg:block">
              <NavLink to={"/"} className="hover:bg-primary-400">
                Home
              </NavLink>
              <NavLink to={"/Realestate"} className="hover:bg-primary-400">
                Real Estate
              </NavLink>
              <NavLink to={"/faq"} className="hover:bg-primary-400">
                FAQs
              </NavLink>
              <NavLink to={"/agent"} className="hover:bg-primary-400">
                Agents
              </NavLink>
              <NavLink to={"/contact"} className="hover:bg-primary-400">
                Contact
              </NavLink>
            </ul>
          </div>
          <div className="lg:hidden text-[28px] mx-4">
            {openMenu ? (
              <RiMenu2Line
                className="cursor-pointer"
                onClick={() => setOpenMenu(!openMenu)}
              />
            ) : (
              <IoClose
                className="text-light cursor-pointer"
                onClick={() => setOpenMenu(!openMenu)}
              />
            )}
            {!openMenu && (
              <MobileMenu setOpenMenu={setOpenMenu} openMenu={openMenu} />
            )}
          </div>
          <div className="flex items-center gap-5 text-[20px] relative">
            <FaPhoneAlt className="hidden md:block group-hover:rotate-12" />
            <p className="hidden md:block text-[15px] font-bold">
              1-800-555-1234
            </p>
            <span
              className="cursor-pointer"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <FaUserCircle className="text-[36px]" />
            </span>
            {isLoginIn && !open && (
              <div className="dropdown-menu bg-white absolute top-0 right-0 border rounded my-11 px-2 z-10">
                <div className="email font-bold text-surface-500 text-[16px] border-b-4 p-3">
                  {userDetails && userDetails?.email}
                </div>
                <Link
                  to={"/profile"}
                  onClick={() => setOpen(true)}
                  className="menu-item block text-black p-3 text-[15px] cursor-pointer hover:bg-slate-100 my-1"
                >
                  My Profile
                </Link>
                <div
                  onClick={() => {
                    dispatch(logout());
                    navigate("/");
                  }}
                  className="menu-item text-black p-3 text-[15px] cursor-pointer hover:bg-slate-100 my-1"
                >
                  Log out
                </div>
              </div>
            )}

            {openModel && !open && <Modal setOpen={setOpen} />}
          </div>
        </div>
      </header>
    </>
  );
}
