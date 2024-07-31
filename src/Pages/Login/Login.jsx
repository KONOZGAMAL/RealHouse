import { useState } from "react";
import { loginUser } from "../../rtk/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { sendPasswordResetEmail, getAuth } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);

  const login = async (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };
  const handleFunForgetPass = async () => {
    try {
      await sendPasswordResetEmail(getAuth(), email);
      setMessage("Check your inbox for further instructions");
      // https://www.mohmal.com/ar/inbox
    } catch {
      setMessage("Failed to reset password");
    }
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
          required
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
      <p
        className="underline cursor-pointer"
        onClick={() => handleFunForgetPass()}
      >
        Forget password ?
      </p>
      <p className="text-secondary-color text-sm">{message}</p>
      <p className="text-red-700 text-sm">{error}</p>
      <input
        type="submit"
        value={"Login"}
        className="w-full mt-4 rounded-none bg-[#1ea69a] text-white p-3 cursor-pointer uppercase"
      />
      <input />
    </form>
  );
}
