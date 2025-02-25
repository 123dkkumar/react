import React from "react";

const Login = () => {
  return (
    <div className=" bg-neutral-950 flex items-center justify-center h-screen w-screen ">
      <div className="border-2  border-emerald-600 p-20 rounded-xl">
        <form action="" className="flex flex-col items-center justify-center">
          <input
            required
            className=" border-2 border-emerald-600 rounded-full outline-none text-white py-2 px-3 text-xl placeholder:text-gray-400"
            type="text"
            placeholder="Enter Your Email"
          />
          <input
            required
            className=" border-2 border-emerald-600 outline-none text-white bg-transparent rounded-full py-2 px-3 text-xl placeholder:text-gray-400 mt-5"
            type="password"
            placeholder="Enter Password"
          />
          <button className=" bg-emerald-600 border-none outline-none text-white  rounded-full py-2 px-25 text-xl placeholder:text-white-800 mt-7 font-bold hover:bg-emerald-800">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
