export default function Quote() {
  return (
    <div className="relative">
      <svg
        className="absolute top-[7%] left-0 z-30
         fill-secondary-color/80 brightness-50 w-[90px]
          h-[90px] md:w-[205px] md:h-[141px]"
        xmlns="http://www.w3.org/2000/svg"
        width="205"
        height="141"
        viewBox="0 0 205 141"
      >
        <g>
          <path
            d="M69.8 60.7C82.9 69.1 89.4 80.4 
          89.4 94.7 89.4 108.9 85.2 120.1 76.8 128.3 68.4 136.4 57.9 140.5
           45.3 140.5 32.7 140.5 22.1 136.5 13.5 128.6 4.8 120.7 0.5 110.3
            0.5 97.5 0.5 84.6 4.7 72.1 13.1 60L54.4 0.5 97.1 0.5 69.8 60.7ZM176.9
             60.7C190 69.1 196.5 80.4 196.5 94.7 196.5 108.9 192.3 120.1 183.9 
             128.3 175.5 136.4 165 140.5 152.4 140.5 139.8 140.5 129.2 136.5 120.6 
             128.6 111.9 120.7 107.6 110.3 107.6 97.5 107.6 84.6 111.8 72.1 120.2 60L161.5
              0.5 204.2 0.5 176.9 60.7Z"
          ></path>
        </g>
      </svg>
      <svg
        className="absolute bottom-[7%] right-0 z-30
         fill-secondary-color/80 brightness-50 w-[90px] h-[90px] md:w-[205px] md:h-[141px]"
        xmlns="http://www.w3.org/2000/svg"
        width="205"
        height="141"
        viewBox="0 0 205 141"
      >
        <g>
          <path d="M69.8 60.7C82.9 69.1 89.4 80.4 89.4 94.7 89.4 108.9 85.2 120.1
           76.8 128.3 68.4 136.4 57.9 140.5 45.3 140.5 32.7 140.5 22.1 136.5 13.5 128.6
            4.8 120.7 0.5 110.3 0.5 97.5 0.5 84.6 4.7 72.1 13.1 60L54.4 0.5 97.1 0.5 69.8
             60.7ZM176.9 60.7C190 69.1 196.5 80.4 196.5 94.7 196.5 108.9 192.3 120.1 183.9
              128.3 175.5 136.4 165 140.5 152.4 140.5 139.8 140.5 129.2 136.5 120.6 128.6 111.9
               120.7 107.6 110.3 107.6 97.5 107.6 84.6 111.8 72.1 120.2 60L161.5 0.5 204.2 0.5 
               176.9 60.7Z"></path>
        </g>
      </svg>
      <div
        className="text-center text-white bg-fixed bg-cover bg-secondary-color py-64"
        style={{
          clipPath: "polygon(100% 0%, 100% 35%, 151% 85%, 0px 100%, 0 14%)",
        }}
      >
        <div className="container">
         <blockquote
         className="text-[20px] md:text-[36px] leading-[2] z-50 relative"
       >
          <i>
            "Finding the right home is more than just a transaction; it's about
            embracing a new chapter of life and building a future. Our
            commitment is to guide you through every step of the journey,
            ensuring your real estate experience is seamless and rewarding."
          </i>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
