import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../rtk/slices/authSlice";
import PropTypes from "prop-types";

export default function Register({ setAuth }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const signUp = async (e) => {
    e.preventDefault();
    dispatch(registerUser({ name, email, password }));
    setAuth("login");
  };
  return (
    <form
      onSubmit={signUp}
      className="flex flex-col gap-5 text-[14px] w-full text-black"
    >
      <div className="flex flex-col gap-2">
        <label className="font-bold">User Name</label>
        <input
          type="text"
          placeholder="Your User Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-none w-full border p-2 focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-bold">Email</label>
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-none w-full border p-2 focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-bold">Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-none w-full border p-2 focus:outline-none"
        />
      </div>

      <input
        type="submit"
        value={"Register"}
        className="w-full mt-4 rounded-none bg-[#1ea69a] text-white p-3 cursor-pointer uppercase"
      />
      <input />
    </form>
  );
}

Register.propTypes = {
  setAuth: PropTypes.any,
};
