import FormContact from "../../Pages/Contact/FormContact";
import tour from "../../../public/assets/tour.webp"
export default function ScheduleTour() {
  return (
    <div className="py-8 bg-bg-third text-[15px]">
      <div className="container text-[15px] flex flex-col gap-6">
        <p className="text-secondary-color text-[18px] font-bold">
          Schedule A Tour
        </p>
        <div className="flex gap-5 flex-wrap-reverse mb-0">
          <div className="w-[250px] grow">
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <input
                id="default-datepicker"
                type="date"
                className=" border border-gray-300  text-sm block ps-10
                   w-full mt-6 rounded-none p-4 text-gray-700 cursor-pointer 
            transition-all focus:ring-1 focus:outline-none my-3"
                placeholder="Select date"
              />
            </div>
            <FormContact valueSub={"Schedule"} />
          </div>
          <div className="flex flex-col gap-3 w-[250px] grow">
            <img
              loading="lazy"
              src={tour}
              alt="tour"
              height="204px"
              width="100%"
              className="h-[204px] w-full"
            />
            <p className="text-[16.5px] font-bold text-secondary-color">
              Discover your dream property
            </p>
            <p className="leading-[2]">
              Immerse yourself in the captivating ambiance of our properties.
              Book a personalized tour to explore the exquisite beauty and
              unique features of our property.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
