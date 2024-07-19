import { FaPlus } from "react-icons/fa6";
import data from "./Data";
import { useState } from "react";
import { FaMinus } from "react-icons/fa6";
export default function AccordionSection() {
  const [openQ, setOpenQ] = useState(null);
  const [typeq, setTypeQ] = useState("all");
  const DisplayTypeQ = (type) => {
    setTypeQ(type);
  };
  const toggleOpenQ = (id) => {
    if (openQ === id) {
      setOpenQ(null);
    } else {
      setOpenQ(id);
    }
  };
  return (
    <div
      className="flex flex-col gap-8 bg-white shadow-md relative my-11
    card p-6 grow w-[663px] border"
    >
      <div className="bg-secondary-color text-white w-[94%] m-auto font-bold text-[21px] p-[20px] absolute -top-[30px]">
        <p>FAQs – Filterable Accordion</p>
      </div>
      <div className="pt-3 flex gap-6 text-[14px] md:text-[17px] text-text-secondary font-[400] mt-[50px]">
        <p
          className={
            typeq === "all"
              ? "border-b border-secondary-color text-secondary-color cursor-pointer font-bold"
              : "cursor-pointer break-before-column border-b border-text-secondary"
          }
          onClick={() => DisplayTypeQ("all")}
        >
          All
        </p>
        <p
          className={
            typeq === "agent"
              ? "border-b border-secondary-color text-secondary-color cursor-pointer font-bold"
              : "cursor-pointer break-before-column border-b border-text-secondary"
          }
          onClick={() => DisplayTypeQ("agent")}
        >
          Agents FAQs
        </p>
        <p
          className={
            typeq === "property"
              ? "border-b border-secondary-color text-secondary-color cursor-pointer font-bold"
              : "cursor-pointer break-before-column border-b border-text-secondary"
          }
          onClick={() => DisplayTypeQ("property")}
        >
          Choosing a Property
        </p>
      </div>
      <div>
        {data.map(
          (item, _id) =>
            (typeq == "all" || item.type == typeq) && (
              <div
                key={_id}
                className="bg-[#e8f6f5] shadow"
              >
                <div
                  className=" flex gap-3 text-[15px]
                  cursor-pointer font-[500] white-space-nowrap leading-[2.5] my-3 p-3 m-0"
                  onClick={() => toggleOpenQ(item.id)}
                  style={{
                    background: openQ !== item.id ? "#e8f6f5" : "#d2edeb",
                  }}
                >
                  {openQ === item.id ? (
                    <div className="font-semibold pt-2">
                      <FaMinus />
                    </div>
                  ) : (
                    <div className="font-semibold pt-2">
                      <FaPlus />
                    </div>
                  )}
                  <div className="text-surface-600 font-semibold">
                    <p>{item.q}</p>
                  </div>
                </div>
                <div>
                {openQ === item.id && (
                  <div
                  className="text-[14px]
                  cursor-pointer font-[500] white-space-nowrap duration-200 p-5"
                  
                  >
                  <p className="text-surface-500 leading-9">{item.ans}</p>
                  </div>
                  )}
                  </div>
                  </div>
            )
        )}
      </div>
    </div>
  );
}
