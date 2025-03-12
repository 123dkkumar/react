import React, { useState } from "react";
import { setLocalStorage } from "../../utils/localStorage";

const Header = () => {
  // const [userName, setUserName] = useState("");
  // if (!data) {
  //   setUserName("admin");
  // } else {
  //   setUserName(data.firstName);
  // }

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    window.location.reload();
  };

  return (
    <div className="flex items-end justify-between ">
      <h1 className="text-2xl font-medium ">
        Hello <br />{" "}
        <span className="text-3xl font-semibold">userName ✌✌</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 font-bold text-lg text-white px-5 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
