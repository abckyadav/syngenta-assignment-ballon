import React from "react";

const Balloons = ({ bgColor, id }) => {
  return (
    <div >
      <div
        className="ballon"
        style={{
          backgroundColor: bgColor,
        }}
      >
        {id}
      </div>
    </div>
  );
};

export default Balloons;
