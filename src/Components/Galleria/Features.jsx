import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa6";
export default function Features({Feature}) {
  return (
    <div className="py-8 bg-bg-third">
    <div className="container flex flex-col gap-2 my-5">
      <p className="text-secondary-color text-[18px] font-bold">Features</p>
      <div className="flex gap-8 flex-wrap">
        {Feature?.map((item, _id) => (
          <p
            key={_id}
            className="text-text-secondary min-w-36 flex items-center gap-2"
          >
            <span className="text-primary-color">
              <FaCheck />
            </span>{" "}
            {item}
          </p>
        ))}
      </div>
    </div>
  </div>
  )
}
Features.propTypes = {
   Feature: PropTypes.isRequired,
  };
  