import AgentSection from "../../Components/AgentSection/AgentSection";
import BannerSection from "../../Components/BannerSection/BannerSection";
import BannerSlide from "../../Components/BannerSlide/BannerSlide";
import Brands from "../../Components/Brands/Brands";
import BuyOrSell from "../../Components/BuyOrSell/BuyOrSell";
import FeaturesSection from "../../Components/FeaturesSection/FeaturesSection";
import LookingForMore from "../../Components/LookingForMore/LookingForMore";
import Quote from "../../Components/Quote/Quote";
import RealEstateSection from "../../Components/RealEstateSection/RealEstateSection";
import Recent from "../../Components/Recent/Recent";
import ForSale from "../../Components/Recent/ForSale";
import ForRent from "../../Components/Recent/ForRent";
import Search from "../../Components/Search/Search";
import "./Home.css";
import { Helmet, HelmetProvider } from 'react-helmet-async';
export default function Home() {
  return (
    <HelmetProvider>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <div className="home">
      <BannerSlide />
      <BannerSection valueSub={"Submit"}/>
      <Search />
      <RealEstateSection
        title={"Near you"}
        p1={"Properties"}
        p2={"Check out latest properties near you"}
      />
      <Recent/>
      <ForSale/>
      <ForRent/>
      <BuyOrSell/>
      <AgentSection/>
      <Quote/>
      <FeaturesSection/>
      <LookingForMore/>
      <Brands/>
    </div>
    </HelmetProvider>
  );
}
