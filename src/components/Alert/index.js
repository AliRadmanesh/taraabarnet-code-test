import React from "react";

const Alert = ({ type = "error", message = "Something went wrong :(" }) => {
  const alertColors = {
    error: "red",
    success: "green",
  };
  const color = alertColors[type];

  return (
    <div className={`p-4 my-8 mx-4 bg-${color}-100 rounded-lg`} role="alert">
      <span className={`font-medium text-sm text-${color}-700 mx-4`}>
        {message}
      </span>
    </div>
  );
};

export default Alert;
