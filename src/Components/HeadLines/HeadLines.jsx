import PropTypes from "prop-types";
export default function HeadLines({ title, p1, p2 }) {
  return (
    <div
      className="flex flex-col items-center justify-center w-full text-center p-[60px] gap-2"
      style={{
        background: "white",
        clipPath: "polygon(100% 0%, 100% 35%, 151% 85%, 0px 100%, 0 14%",
      }}
    >
      <p className="text-secondary-color text-[17px] p-0 m-0 font-bold">
        {title}
      </p>
      <p className="text-[38px] p-0 m-0">{p1}</p>
      <p className="text-text-secondary text-[17px] p-0 m-0">{p2}</p>
      <div>
  
      </div>
    </div>
  );
}
HeadLines.propTypes = {
  title: PropTypes.string,
  p1: PropTypes.string,
  p2: PropTypes.string,
};
