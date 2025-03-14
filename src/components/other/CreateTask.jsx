import React, { useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useContext } from "react";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, settaskTitle] = useState("");
  const [taskDescription, settaskDescription] = useState("");
  const [taskDate, settaskDate] = useState("");
  const [assignTo, setassignTo] = useState("");
  const [category, setcategory] = useState("");

  const [newTask, setNewTask] = useState({});

  // useEffect(() => {
  //   console.log(task);
  // }, [task]);

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      complete: false,
    });
    const data = userData;

    data.forEach((e) => {
      if (assignTo == e.firstName) {
        e.tasks.push(newTask);
        e.taskNumbers.newTask = e.taskNumbers.newTask + 1;
      }
    });
    setUserData(data);
    //console.log(data);
    settaskTitle("");
    setcategory("");
    setassignTo("");
    settaskDate("");
    settaskDescription("");
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex w-full flex-wrap items-start justify-between "
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                settaskTitle(e.target.value);
              }}
              className="text-sm py-1 px-2  w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Make a UI Design"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => {
                settaskDate(e.target.value);
              }}
              className="text-sm py-1 px-2  w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Asign to</h3>
            <input
              value={assignTo}
              onChange={(e) => {
                setassignTo(e.target.value);
              }}
              className="text-sm py-1 px-2  w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Employee Name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => {
                setcategory(e.target.value);
              }}
              className="text-sm py-1 px-2  w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Design, dev, etc"
            />
          </div>
        </div>
        <div className="w-2/5 flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => {
              settaskDescription(e.target.value);
            }}
            className="w-full h-44 text-sm px-4 py-2 outline-none rounded bg-transparent border-[1px] border-gray-400"
            name=""
            id=""
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full font-bold">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
