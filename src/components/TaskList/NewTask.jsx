import React from "react";

const NewTask = ({ data }) => {
  return (
    <div className="h-full w-[300px] bg-blue-400 rounded-xl p-5 flex-shrink-0">
      <div className="flex items-center justify-between">
        <h3 className="bg-red-600 text-sm font-bold px-3 py-1 rounded ">
          {data.category}
        </h3>
        <h4 className="font-semibold text-sm "> {data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold"> {data.taskTitle}</h2>
      <p className="text-sm mt-3">{data.taskDescription}</p>
      <div className="mt-4">
        <button className="bg-red-500 py-1 px-2 text-sm">Accept Task</button>
      </div>
    </div>
  );
};

export default NewTask;
