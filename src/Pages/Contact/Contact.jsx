import Search from "../../Components/Search/Search";
import BannerPages from "../BannerPages/BannerPages";
import ContentContact from "./ContentContact";
import FormContact from "./FormContact";
import { Helmet, HelmetProvider } from 'react-helmet-async';
export default function Contact() {
  return (
    <HelmetProvider>
    <Helmet>
      <title>Contact</title>
    </Helmet>
    <div>
      <BannerPages item={"Contact"} />
      <Search changeTop="-top-28" />
      <div className="container">
        <div className="flex flex-col gap-8 bg-white p-10 shadow-md">
          <div className="flex gap-8 flex-wrap justify-center">
            <FormContact />
            <div className="flex flex-col gap-8">
            <ContentContact/>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.3329545782094!2d-80.20946560979459!3d25.75956380000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b6f56a7a20f7%3A0x6fa6a952b01d83ea!2s705%20SW%2026th%20Rd%2C%20Miami%2C%20FL%2033129!5e0!3m2!1sar!2sus!4v1717422932040!5m2!1sar!2sus"
            width="100%"
            height="450"
            className="mb-3"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
    </HelmetProvider>
  );
}
