import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
export default function MobileMenu({openMenu,setOpenMenu}) {
  return (
    <>
      {!openMenu && (
        <div
          className="rounded-md text-[15px] flex relative
     items-center justify-center"
        >
          <div className="z-30 fixed top-20 md:right-[30%] right-[8%] bg-black">
            <ul className="w-[15rem] md:w-[20rem] flex flex-col text-center p-3 gap-1 text-white">
              <NavLink
                to={"/"}
                className="hover:bg-primary-400"
                onClick={() => setOpenMenu(!openMenu)}
              >
                Home
              </NavLink>
              <NavLink
                to={"/Realestate"}
                className="hover:bg-primary-400"
                onClick={() => setOpenMenu(!openMenu)}
              >
                Real Estate
              </NavLink>
              <NavLink
                to={"/faq"}
                className="hover:bg-primary-400"
                onClick={() => setOpenMenu(!openMenu)}
              >
                FAQs
              </NavLink>
              <NavLink
                to={"/agent"}
                className="hover:bg-primary-400"
                onClick={() => setOpenMenu(!openMenu)}
              >
                Agents
              </NavLink>
              <NavLink
                to={"/contact"}
                className="hover:bg-primary-400"
                onClick={() => setOpenMenu(!openMenu)}
              >
                Contact
              </NavLink>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
MobileMenu.propTypes = {
    openMenu: PropTypes.boolean,
    setOpenMenu: PropTypes.boolean,
}