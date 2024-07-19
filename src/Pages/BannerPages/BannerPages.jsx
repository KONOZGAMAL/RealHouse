import PropTypes from "prop-types";

export default function BannerPages({ item }) {
  return (
    <>
      <div className="w-full h-[45vh] relative">
        <img
          // src="@/assets/bg2.webp"
          src="../../../public/assets/bg2.webp"
          alt="banner"
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
