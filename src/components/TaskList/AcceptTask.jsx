import React from "react";

const AcceptTask = ({ data }) => {
  return (
    <div className="h-full w-[300px] bg-red-400 rounded-xl p-5 flex-shrink-0">
      <div className="flex items-center justify-between">
        <h3 className="bg-red-600 text-sm font-bold px-3 py-1 rounded ">
          {data.category}
        </h3>
        <h4 className="font-semibold text-sm ">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-3">{data.taskDescription}</p>
      <div className="flex justify-between mt-5">
        <button className="bg-green-500 py-1 px-2 text-sm">
          mark as completed
        </button>
        <button className="bg-blue-500 py-1 px-2 text-sm">
          mark as failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
