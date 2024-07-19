import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAgents } from "../../rtk/slices/AgentsSlice";
export default function AgentSection() {
  const { agents } = useSelector((state) => state.agents);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAgents());
  }, [dispatch]);
  return (
    <div
      className="flex flex-col items-center justify-center w-full text-center p-[60px] gap-2
        pb-10"
    >
      <p className="text-secondary-color text-[17px] p-0 m-0 font-bold">
        Meet Our
      </p>
      <p className="text-[38px] p-0 m-0">Agents</p>
      <p className="text-text-secondary text-[17px] p-0 m-0">
        Get in touch with our real estate experts.
      </p>
      <div
        className="flex flex-wrap my-10 gap-5
    text-[15px] justify-center items-center mt-[80px] gap-y-24"
      >
        {agents?.map((items, _id) => (
          <div key={_id} className=" bg-white shadow-lg flex justify-center items-center flex-col w-[287px] group">
            <img
              src={items?.img}
              alt="logo"
              width={"128px"}
              className="size-[128px] -mt-[35px]"
            />
            <div className="flex flex-col justify-center gap-3 relative pb-10">
              <Link
                to={`/agent/${items?.id}`}
               className="text-[19px] font-bold hover:text-primary-color">
                {items?.name}
              </Link>
              <span className="text-secondary-color">{items?.Mobile}</span>
              <span>{items?.Email}</span>
              <span className="text-[24px] text-secondary-color font-bold">
                {items?.realEstate}
              </span>
              <span className="text-[13px] font-bold">Listed Properties</span>
              <Link
               to={`/agent/${items?.id}`}
                className="bg-primary-color w-fit font-bold p-3 hidden absolute left-[40%] -bottom-4 rounded-full text-white group-hover:block">
                <FaArrowRight className="w-fit" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
