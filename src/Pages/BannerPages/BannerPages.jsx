import PropTypes from "prop-types";
import image from "../../../public/assets/bg2.webp";
export default function BannerPages({ item }) {
  return (
    <>
      <div className="w-full h-[45vh] relative">
        <img
          src={image}
          alt="banne"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="container relative text-white text-[36px] font-bold -top-32">
        {item}
      </h1>
    </>
  );
}
BannerPages.propTypes = {
  item: PropTypes.string,
};
