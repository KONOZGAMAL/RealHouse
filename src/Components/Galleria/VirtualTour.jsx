import PropTypes from "prop-types";
export default function VirtualTour({ virtual }) {
  return (
    <div className="py-8 bg-white text-[15px]">
      <div className="container text-[15px] flex flex-col gap-6">
        <p className="text-secondary-color text-[18px] font-bold">
          Virtual Tour
        </p>
        <iframe
          width="100%"
          height="600"
          src={virtual}
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
        <br />
      </div>
    </div>
  );
}
VirtualTour.propTypes = {
  virtual: PropTypes.string,
};
