import { IoMdClose } from "react-icons/io";
import Login from "../Login/Login";
import { useState } from "react";
import Register from "../Register/Register";
import PropTypes from "prop-types";
export default function Modal({ setOpen }) {
  const [auth, setAuth] = useState("login");
  const shangePage = (e) => {
    setAuth(e);
  };
  return (
    <div className="w-full h-full fixed top-0 left-0 bg-black/65 z-[100px]">
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex">
          <div className="relative hidden lg:block w-[540px]">
            <img
              className="object-cover w-full h-[100%]"
              src="./public/assets/bg3.webp"
              alt="image"
            />
            <div className="w-full h-full absolute top-0 left-0 bg-black/65 p-6">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <p className="text-[24px] text-white italic">
                    Owning a home is a keystone of wealth… both financial
                    affluence and emotional security.
                  </p>
                  <p className="text-text-secondary text-[20px] italic">
                    Suze Orman
                  </p>
                </div>
                <div>
                  <p className="text-white text-[20px]">June 5, 2024</p>
                  <p className="text-white text-[30px]">Wednesday!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="min-[500px]:w-[500px] bg-white relative">
            <div
              className="absolute top-0 right-0 bg-slate-500 p-2 text-white cursor-pointer text-[22px]
            transition-all hover:bg-primary-200 hover:text-slate-500 z-50"
              onClick={() => setOpen(true)}
            >
              <IoMdClose />
            </div>
            <div className="p-12">
              <p className="text-[26px] text-text-secondary font-bold mb-[30px]">
                RealHomes Modern
              </p>
              <div className="flex gap-4 text-[16px] text-text-secondary font-[400] mb-[32px]">
                <p
                  onClick={() => shangePage("login")}
                  className={
                    auth === "login"
                      ? "border-b border-secondary-color text-secondary-color cursor-pointer"
                      : "cursor-pointer break-before-column border-b border-text-secondary"
                  }
                >
                  Login
                </p>
                <p
                  onClick={() => shangePage("register")}
                  className={
                    auth === "login"
                      ? "cursor-pointer break-before-column border-b border-text-secondary"
                      : "border-b border-secondary-color text-secondary-color cursor-pointer"
                  }
                >
                  Register
                </p>
              </div>

              {auth === "login" ? <Login /> : <Register setAuth={setAuth} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
Modal.propTypes = {
  setOpen: PropTypes.bool,
};
