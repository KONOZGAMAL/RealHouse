import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../rtk/slices/authSlice";

const useUserDetails = () => {
  const [userDetails, setUserDetails] = useState({});
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const idUser = localStorage.getItem("idUser");
  useEffect(() => {
    dispatch(fetchUser(idUser));
    setUserDetails(user);
  }, [dispatch, user, idUser]);
  return { userDetails };
};
export default useUserDetails;
