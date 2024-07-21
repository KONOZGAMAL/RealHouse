import PropTypes from "prop-types";
export default function RealEstateSection({ title, p1, p2 }) {
  return (
    <div
    className="flex flex-col items-center justify-center w-full
     text-center gap-2"
        >
        <p className="text-secondary-color text-[15px] p-0 m-0 font-bold">
        {title}
        </p>
        <p className="text-[36px] p-0 m-0">{p1}</p>
        <p className="text-text-secondary text-[15px] p-0 m-0">{p2}</p>
        <p className="text-secondary-color text-[22px]">
        Allow the site to access your location to find nearby properties.
        </p>
        <div>
        <img
        src="./assets/allowlocation.png"
        alt=""
        className="w-full h-[250px] md:h-[300px] object-cover"
        width={"100%"}
        height={"300px"}
        />
        </div>
        </div>
    );
}

RealEstateSection.propTypes = {
  title: PropTypes.string,
  p1: PropTypes.string,
  p2: PropTypes.string,
};
