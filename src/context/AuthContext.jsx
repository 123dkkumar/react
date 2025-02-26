import React from "react";

const AuthContext = ({ children }) => {
  return (
    <div>
      <h1>{children}</h1>
    </div>
  );
};

export default AuthContext;
