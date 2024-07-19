import PropTypes from "prop-types";
export default function AdditionalDetails({ apartment }) {
  return (
    <div className="flex flex-col gap-3 py-8 bg-bg-third">
      <div className="container flex flex-col gap-3">
        <p className="text-secondary-color text-[18px] font-bold">
          Additional Details
        </p>
        <div className="flex flex-col gap-3 w-[650px]">
          <div className="flex flex-wrap gap-3">
            <p className="w-[171px] max-[774px]:w-full">Built In:</p>
            <p className="text-text-secondary text-[13px] md:text-[17px]">{apartment?.YearBuilt}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <p className="max-[774px]:w-full">Flooring:</p>
            <p className="text-text-secondary text-[13px] md:text-[17px]">{apartment?.FLOORS}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <p className="w-[171px] max-[774px]:w-full">Doors Windows:</p>
            <p className="text-text-secondary text-[13px] md:text-[17px]">{apartment?.DOORS_WINDOWS}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <p className="w-[171px] max-[774px]:w-full">Bedromm Features:</p>
            <p className="text-text-secondary text-[13px] md:text-[17px]">{apartment?.BEDROOM_FEATURES}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <p className="w-[171px] max-[774px]:w-full">Diving area:</p>
            <p className="text-text-secondary text-[13px] md:text-[17px]">{apartment?.DINING_AREA}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <p className="w-[171px] max-[774px]:w-full">Flooring:</p>
            <p className="text-text-secondary text-[13px] md:text-[17px]">{apartment?.FLOORS}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
AdditionalDetails.propTypes = {
  apartment: PropTypes.shape({
    YearBuilt: PropTypes.string,
    FLOORS: PropTypes.string,
    DOORS_WINDOWS: PropTypes.string,
    BEDROOM_FEATURES: PropTypes.string,
    DINING_AREA: PropTypes.string,
  }).isRequired,
};
