import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded h-100  ">
      <div className="bg-red-400 py-2 mb-2  px-4 flex justify-between rounded">
        <h2 className="w-1/5 text-lg font-bold ">Employee</h2>
        <h3 className="w-1/5 text-lg font-bold "> New Tasks</h3>
        <h5 className="w-1/5 text-lg font-bold ">Active Task</h5>
        <h5 className="w-1/5 text-lg font-bold ">Completed</h5>
        <h5 className="w-1/5 text-lg font-bold ">Failed</h5>
      </div>
      <div className=" ">
        {userData.map((e, idx) => {
          return (
            <div
              key={idx}
              className=" border-2 border-emerald-500 py-2 mb-2  px-4 flex justify-between rounded"
            >
              <h2 className="text-lg font-bold  w-1/5 ">{e.firstName}</h2>
              <h3 className="text-lg  w-1/5 !text-blue-600 font-bold ">
                {e.taskNumbers.newTask}
              </h3>
              <h5 className="text-lg   w-1/5 !text-yellow-900 font-bold">
                {e.taskNumbers.active}
              </h5>
              <h5 className="text-lg  w-1/5 !text-green-600 font-bold">
                {e.taskNumbers.completed}
              </h5>
              <h5 className="text-lg  w-1/5 !text-red-600 font-bold">
                {e.taskNumbers.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
