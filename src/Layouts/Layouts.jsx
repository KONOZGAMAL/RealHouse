// fixed this code do not work
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

export default function Layouts() {
  return (
    <div>
    <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
