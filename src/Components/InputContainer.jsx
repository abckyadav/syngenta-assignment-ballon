import React from "react";

const InputContainer = ({ handleInputChange, handleShoot }) => {
  return (
    <div className="input_container">
      <input
        type="number"
        placeholder="Enter number between 1 to 5 only"
        onChange={handleInputChange}
      />
      <button onClick={handleShoot}>Shoot</button>
    </div>
  );
};

export default InputContainer;
