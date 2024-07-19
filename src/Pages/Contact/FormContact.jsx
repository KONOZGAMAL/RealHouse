import { toast } from "react-toastify";
import PropTypes from "prop-types";
export default function FormContact({valueSub}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(
      "The message has been sent successfully. We will contact you as soon as possible."
    );
    e.preventDefault();
  };
  return (
    <form className="py-2" onSubmit={handleSubmit}>
      <div className="w-full">
        <label
          htmlFor="Name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="Name"
          name="name"
          required
          placeholder="Your Name"
          className="rounded-none border p-4
               focus:ring-1 focus:outline-none my-3 w-full"
        />
      </div>
      <div className="">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>

        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Your Email"
          className="rounded-none border p-4
               focus:ring-1 focus:outline-none my-3 w-full"
        />
      </div>
      <div className="">
        <label
          htmlFor="number"
          className="block text-sm font-medium text-gray-700"
        >
          Phone Number
        </label>

        <input
          type="number"
          id="number"
          name="number"
          required
          placeholder="Your Number"
          className="rounded-none border p-4
             focus:ring-1 focus:outline-none my-3 w-full"
        />
      </div>
      <div className="">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message
        </label>

        <textarea
          rows="5"
          cols="30"
          required
          id="message"
          name="message"
          placeholder="Your Message"
          className="rounded-none border p-3
           focus:ring-1 focus:outline-none my-3 w-full"
        />
      </div>
      <p className="text-[14px] font-bold">GDPR Agreement *</p>
      <div className="flex items-center gap-2 mt-2">
        <input
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600
             bg-gray-100 border-gray-300 
             rounded cursor-pointer"
          required
        />
        <label className="text-[14px]">
          I consent to having this website store my submitted information so
          they can respond to my inquiry.
        </label>
      </div>
      <input
        type="submit"
        value={valueSub}
        className="w-full mt-6 rounded-none bg-[#1ea69a] p-3 text-white cursor-pointer hover:bg-emerald-700
            transition-all"
      />
    </form>
  );
}
FormContact.propTypes = {
  valueSub: PropTypes.string,
};
