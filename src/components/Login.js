import React from "react";

const Login = () => {
  return (
    <div className="flex w-full h-screen flex-col flex-wrap items-center  ">
      <h1 className="font-bold  mt-10 text-2xl font-mono ">Login Page </h1>
      <div className="flex  flex-col items-start justify-around">
        <input
          type="text"
          placeholder="example@gmail.com"
          className="p-2 rounded-md m-2"
          name="username"
          id="username"
          required
        />
        <input
          type="password"
          placeholder="**********"
          className="p-2 rounded-md m-2"
          name="password"
          id="password"
          required
        />
        <button className="p-2 border-2 rounded-md m-2">Login</button>
      </div>
    </div>
  );
};

export default Login;
