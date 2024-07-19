export default function BuyOrSell() {
  return (
    <div
    className="relative"
    style={{
        clipPath: "polygon(100% 0%, 100% 35%, 151% 85%, 0px 100%, 0 0%)",
      }}
  >
    <img
      loading="lazy"
      alt="buy or sell"
        src="./assets/bg2.webp"
      className="absolute w-full h-full left-0 top-0 object-cover"
      width="100%"
      height="100%"
    />
    <div
      className="container text-center
       relative justify-center flex flex-col items-center gap-6
        text-white min-h-[100vh] font-bold"
    >
      <p className="text-[15px]">Buy or Sell</p>
      <p className="text-[26px] sm:text-[36px] font-normal">
        Looking to Buy a new property or Sell an existing one? RealHomes
        provides an awesome solution!
      </p>
      <div className="flex justify-center font-bold gap-3">
        <button className="bg-primary-color p-3 hover:bg-primary-color/70">
          Submit Property
        </button>
        <button className="bg-white text-black/50 p-3 hover:bg-white/70">
          Browse Properties
        </button>
      </div>
    </div>
  </div>
  );
}