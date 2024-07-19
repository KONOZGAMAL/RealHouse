import Search from "../../Components/Search/Search";
import BannerPages from "../BannerPages/BannerPages";
import FormContact from "../Contact/FormContact";
import AccordionSection from "./AccordionSection";
import { Helmet, HelmetProvider } from 'react-helmet-async';
export default function Faq() {
  return (
    <HelmetProvider>
    <Helmet>
      <title>FAQs</title>
    </Helmet>
    <div>
      <BannerPages item={"FAQs – Filterable Accordion"} />
      <Search changeTop="-top-28" />
      <div className="container">
        <div className="flex gap-6 flex-wrap">
          <AccordionSection className="faq" />
          <div className="w-[320px] grow">
            <h2 className="text-[22px] mb-3">Contact</h2>
            <FormContact widthPx="100%" />
          </div>
        </div>
      </div>
    </div>
    </HelmetProvider>
  );
}
