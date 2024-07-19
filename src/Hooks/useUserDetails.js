import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../rtk/slices/authSlice";

const useUserDetails = () => {
  const [userDetails, setUserDetails] = useState({});
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const idUser = localStorage.getItem("idUser");
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  useEffect(() => {
    if (user) {
      const foundUser = user?.find((item) => item.id == idUser);
      if (foundUser) {
        setUserDetails(foundUser);
      }
    }
  }, [user, idUser]);
  return { userDetails };
};
export default useUserDetails;
