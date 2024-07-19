import { useState } from "react";
import { loginUser } from "../../rtk/slices/authSlice";
import { useDispatch} from "react-redux";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();


  const login = async (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };
  return (
    <form
      onSubmit={login}
      className="flex flex-col gap-5 text-[14px] w-full text-black"
    >
      <div className="flex flex-col gap-2">
        <label className="font-bold">
          Email ( for testing: demo@gmail.com )
        </label>
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-none w-full border p-2 focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-bold">
          Password ( for testing: 1234567DEMO )
        </label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-none w-full border p-2 focus:outline-none"
        />
      </div>
      <p className="underline cursor-pointer">Forget password</p>
      <input
        type="submit"
        value={"Login"}
        className="w-full mt-4 rounded-none bg-[#1ea69a] text-white p-3 cursor-pointer uppercase"
      />
      <input />
    </form>
  );
}
// <p className="text-red-700 text-sm">Email or password was incorrect</p>