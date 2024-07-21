import Search from "../../Components/Search/Search";
import BannerPages from "../BannerPages/BannerPages";
import { useState } from "react";
import RealEstateItems from "../../Components/RealEstateItems/RealEstateItems";
import { Link } from "react-router-dom";
import useUserDetails from "../../Hooks/useUserDetails";
import { updatePassword } from "firebase/auth";
import { auth } from "../../Config/firebase";
import { toast } from "react-toastify";

export default function Profile() {
  const [Pass, setPass] = useState("");
  const [changePass, setChangePass] = useState(false);
  const { userDetails } = useUserDetails();
  const changePassword = async (event) => {
    event.preventDefault();
    const user = auth.currentUser;
    if (user) {
      await updatePassword(user, Pass)
        .then(() => {
          console.log("Update successful.");
          setChangePass(false);
          toast.success("your password has been updated");
        })
        .catch((error) => {
          console.error("Error updating password:", error);
          setChangePass(true);
        });
    } else {
      console.log("No user is signed in.");
    }
  };

  return (
    <div>
      <BannerPages item={"My Profile"} />
      <Search changeTop="-top-28" />
      <div className="container pb-20 flex gap-8 text-[15px] flex-col">
        <p className="text-secondary-color font-bold">Personal Information</p>
        <div>
          <div className="flex flex-wrap gap-x-24 gap-y-5 items-center">
            <p>
              <span className="font-bold">Email : </span>
              {userDetails.email}
            </p>
            {changePass && (
              <div className="flex gap-2 items-center">
                <span className="font-bold">Password : </span>
                <form className="flex gap-3" onSubmit={changePassword}>
                  <input
                    type="password"
                    placeholder="Password"
                    value={Pass}
                    onChange={(e) => setPass(e.target.value)}
                    required
                    className="max-w-[100px] rounded-none pl-2 outline-none border border-red-300"
                  />
                  <input
                    type="submit"
                    value={"Change"}
                    className="bg-green-600 py-2 px-5 rounded-md text-white cursor-pointer hover:bg-green-800"
                  />
                  <input
                    type="button"
                    value={"Cancel"}
                    onClick={() => setChangePass(false)}
                    className="py-2 px-5 rounded-md border-[2px] text-red-400 cursor-pointer border-red-400 hover:bg-red-100"
                  />
                </form>
              </div>
            )}
          </div>
          <p
            className="mt-2 text-[14px] cursor-pointer hover:font-bold underline"
            onClick={() => setChangePass(true)}
          >
            Change password
          </p>
        </div>
        <hr />
        <p className="text-secondary-color font-bold">My Wishlist</p>
        {userDetails?.wishlist?.length !== 0 ? (
          userDetails?.wishlist?.map((items, _id) => (
            <div className="shadow-md my-1" key={_id}>
              <RealEstateItems items={items} />
            </div>
          ))
        ) : (
          <div className="flex justify-center flex-col items-center w-full">
            <img
              loading="lazy"
              alt="no data found"
              src="./assets/noData.webp"
              width="100%"
              className="max-w-[400px] h-[250px]"
              height="350px"
            />
            <p className="font-bold text-[18px] text-secondary-color">
              Wishlist is empty
            </p>
            <Link
              className="font-bold w-fit text-[19px] text-white px-6 py-1 hover:bg-primary-color/80 bg-primary-color rounded-md mt-4"
              to="/realEstate"
            >
              Explore Real Estate
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
