import React from "react";

const Balloons = ({ bgColor, id }) => {
  return (
    <div>
      <div
        className="ballon"
        style={{ backgroundColor: bgColor, color: "white" }}
      >
        {id}
      </div>
    </div>
  );
};

export default Balloons;
