import { toast } from "react-toastify";
import PropTypes from "prop-types";
export default function BannerSection({valueSub}) {
  const handleSubmit = (e) =>{
    e.preventDefault();
    toast.success("The message has been sent successfully. We will contact you as soon as possible.");
    e.preventDefault();
  }
  return (
    <div
      className="absolute top-[5rem] md:top-[1.5rem] md:right-20 z-0 bg-white 
    py-3 px-6 sm:max-w-[450px] w-full m-2 sm:right-0 pt-8"
    >
      <p className="text-[24px] font-bold">Let Us Call You!</p>
      <p className="text-[15px] text-gray-500">
        {" "}
        To help you choose your property
      </p>
      <form className="flex gap-4 flex-col my-4" onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <input type="text" placeholder="Your Name" className="rounded-none w-1/2 border p-2
          focus:ring-1 focus:outline-none" required/>
          <input type="number" placeholder="Your Number" className="rounded-none focus:outline-none w-1/2 border p-2 focus:ring-1" required
           />
          </div>
          <input type="email" placeholder="Your Email" className="rounded-none border p-2
           focus:ring-1 focus:outline-none" required
           />
         <textarea 
         required
         rows="5"
         cols="30"
         placeholder="Tell us about desired property"
         className="rounded-none p-2 border focus:ring-1 focus:outline-none"
         />
         <p className="text-[14px] font-bold">GDPR Agreement *</p>
         <div className="flex items-center gap-2 mt-2">
         <input type="checkbox" id="val" value="" className="w-4 h-4 text-blue-600
             bg-gray-100 border-gray-300 
             rounded cursor-pointer" required/>
         <label className="text-[14px]" htmlFor="val">I consent to having this website store my submitted information so they can respond to my inquiry.</label>
         </div>
         <input
         type="submit"
         className="w-full mt-4 rounded-none bg-[#1ea69a] p-3 text-white cursor-pointer hover:bg-emerald-700
         transition-all"
         value={valueSub}
       />
          </form>
    </div>
  );
}
BannerSection.propTypes = {
  valueSub: PropTypes.string,
};