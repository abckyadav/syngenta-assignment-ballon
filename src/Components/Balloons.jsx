import React from "react";

const Balloons = ({ bgColor = "red", id = 1 }) => {
  return (
    <div>
      <h1>Ballons</h1>
      <div className="ballon" style={{ backgroundColor: `#${bgColor}` }}>
        {id}
      </div>
    </div>
  );
};

export default Balloons;
