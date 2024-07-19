import { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div className="">
      <button
        className="rounded-none border-2 border-secondary-color bg-secondary-color 
       flex items-center justify-center fixed bottom-[20px] right-[20px] ml-auto h-12 w-12
        shadow-lg text-surface-0 hover:bg-surface-700
     "
        style={{ display: visible ? "" : "none" }}
        onClick={scrollToTop}
      >
        <MdKeyboardArrowUp className="size-[25px] font-bold" />
      </button>
    </div>
  );
}
