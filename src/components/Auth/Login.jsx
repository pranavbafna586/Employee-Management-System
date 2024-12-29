import React from "react";
import { useState } from "react";
const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("email is", email);
    console.log("password is", password);
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className=" outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 w-full max-w-xs"
            type="email"
            placeholder="Enter your email"
          />
          <input
           value={password}
           onChange={(e) => {
             setPassword(e.target.value);
           }}
            required
            className=" outline-none bg-transparent border-2 border-emerald-600 text-xl mt-3 py-3 px-5 rounded-full placeholder:text-gray-400 w-full max-w-xs"
            type="password"
            placeholder="Enter password"
          />
          <button className="mt-5 text-white outline-none border-none bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white w-full max-w-xs">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
