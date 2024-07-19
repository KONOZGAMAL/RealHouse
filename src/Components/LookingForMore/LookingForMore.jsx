export default function LookingForMore() {
  return (
    <div
      className="relative"
      style={{
        clipPath: "polygon(100% 0%, 100% 35%, 151% 85%, 0px 100%, 0 14%)",
      }}
    >
      <img
        loading="lazy"
        alt="buy or sell"
        src="./assets/bg.webp"
        className="absolute w-full h-full left-0 top-0 object-cover"
        width="100%"
        height="100%"
      />

      <div
        className="text-center
       relative left-0 justify-center flex flex-col items-center gap-6
        text-white min-h-[100vh] font-bold bg-secondary-color/75 w-full"
         width="100%"
        height="100%"
      >
        <p className="text-[15px]">Looking for More?</p>
        <p className="text-[26px] sm:text-[36px] font-normal">
          Talk to our experts or Browse through more properties
        </p>
        <div className="flex justify-center font-bold">
          <button className="bg-black p-3 hover:bg-black/70">
          Get In Touch
          </button>
          <button className="bg-white text-black p-3 hover:bg-white/70">
            Browse More
          </button>
        </div>
      </div>
    </div>
  );
}
