import { GiHomeGarage } from "react-icons/gi";
import { MdOutlineDateRange } from "react-icons/md";
import { MdPhotoSizeSelectSmall } from "react-icons/md";
import PropTypes from "prop-types";
export default function DetailItem({ apartment }) {
  return (
    <div className="py-8 bg-white">
      <div className="container text-[15px] flex flex-col gap-6">
        <div className="flex flex-wrap gap-8">
          {apartment?.Bedrooms !== "undefined" && (
            <div>
              <p className="mb-2 text-[14px]">Bedrooms</p>
              <p className="flex items-center gap-2">
                <svg
                  className="ov-icon text-secondary-color text-[2.16em]"
                  aria-hidden="true"
                  width="34.56"
                  height="34.56"
                  viewBox="0.48 0.48 23.04 23.04"
                  fill="currentColor"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M9 8.5h6v2H9zM15.64 12H8.37a.87.87 0 00-.87.87h.01V14h9v-1.13a.87.87 0 00-.87-.87z"></path>
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2.75 15c-.41 0-.75-.34-.75-.75v-.75h-9v.75c0 .41-.34.75-.75.75S6 16.66 6 16.25v-3.38c0-1 .62-1.85 1.5-2.2V9c0-1.1.9-2 2-2h5c1.1 0 2 .9 2 2v1.67c.88.35 1.5 1.2 1.5 2.2v3.38c0 .41-.34.75-.75.75z"></path>
                </svg>
                {apartment?.Bedrooms}
              </p>
            </div>
          )}
          {apartment?.Garage !== "undefined" && (
            <div>
              <p className="mb-2 text-[14px]">Garage</p>
              <p className="flex items-center gap-2">
                <GiHomeGarage className="ov-icon text-secondary-color text-[2.16em]" />
                {apartment?.Garage}
              </p>
            </div>
          )}
          {apartment?.Bathrooms !== "undefined" && (
            <div>
            <p className="mb-2 text-[14px]">Bathrooms</p>
            <p className="flex items-center gap-2">
              <svg
                className="ov-icon text-secondary-color text-[2.16em]"
                aria-hidden="true"
                width="34.56"
                height="34.56"
                viewBox="0.48 0.48 23.04 23.04"
                fill="currentColor"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path
                  d="M4 20h16V4H4v16zm5-2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm3 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm3 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-8-4c0-2.76 2.24-5 5-5s5 2.24 5 5v1H7v-1z"
                  opacity=".3"
                ></path>
                <circle cx="15" cy="14" r="1"></circle>
                <circle cx="12" cy="14" r="1"></circle>
                <circle cx="15" cy="17" r="1"></circle>
                <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16z"></path>
                <path d="M17 11c0-2.76-2.24-5-5-5s-5 2.24-5 5v1h10v-1zm-8.46-.5c.24-1.69 1.7-3 3.46-3s3.22 1.31 3.47 3H8.54z"></path>
                <circle cx="9" cy="17" r="1"></circle>
                <circle cx="9" cy="14" r="1"></circle>
                <circle cx="12" cy="17" r="1"></circle>
              </svg>{" "}
              {apartment?.Bathrooms}
            </p>
          </div>
          )}
          <div>
            <p className="mb-2 text-[14px]">Year Built</p>
            <p className="flex items-center gap-2">
              <MdOutlineDateRange className="ov-icon text-secondary-color text-[2.16em]" />
              {apartment?.YearBuilt}
            </p>
          </div>
          <div>
            <p className="mb-2 text-[14px]">Area</p>
            <p className="flex items-center gap-2">
              <svg
                className="ov-icon text-secondary-color text-[2.16em]"
                aria-hidden="true"
                width="34.56"
                height="34.56"
                viewBox="-51.2 -51.2 614.4 614.4"
                fill="currentColor"
              >
                <path
                  fill="var(--ci-primary-color, currentColor)"
                  d="M440 440h32v32h-32zM306.182 440h33.455v32h-33.455zM172.364 440h33.455v32h-33.455zM373.091 440h33.455v32h-33.455zM105.455 440h33.455v32h-33.455zM472 40H56a16 16 0 00-16 16v416h32V72h400zM440 373.091h32v33.454h-32zM440 306.182h32v33.454h-32zM440 105.454h32v33.454h-32zM440 172.363h32v33.454h-32zM440 239.272h32v33.455h-32zM239.272 440h33.455v32h-33.455z"
                  className="ci-primary"
                ></path>
              </svg>{" "}
              {apartment?.Area}{" "}
              <span className="text-text-secondary">Sq Ft</span>
            </p>
          </div>
          <div>
            <p className="mb-2 text-[14px]">Lot Size</p>
            <p className="flex items-center gap-2">
              <MdPhotoSizeSelectSmall className="ov-icon text-secondary-color text-[2.16em]" />
              {apartment?.LotSize}{" "}
              <span className="text-text-secondary">Sq Ft</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 my-5">
          <p className="text-secondary-color text-[18px] font-bold">
            Description
          </p>
          <p className="text-text-secondary leading-[2]">
            {apartment?.details}
          </p>
        </div>
      </div>
    </div>
  );
}
DetailItem.propTypes = {
  apartment: PropTypes.shape({
    YearBuilt: PropTypes.string,
    Bedrooms: PropTypes.number,
    Bathrooms: PropTypes.number,
    Garage: PropTypes.number,
    Area: PropTypes.string,
    LotSize: PropTypes.string,
    details: PropTypes.string,
  }).isRequired,
};
