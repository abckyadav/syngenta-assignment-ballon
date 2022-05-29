import React, { useState } from "react";
import Balloons from "./Balloons";
import { initialballoons } from "../randomColor";
import InputContainer from "./InputContainer";

const Home = () => {
  const [balloons, setBalloons] = useState(initialballoons);
  const [inputText, setInputText] = useState();

  const handleInputChange = (e) => {
    const text = Number(e.target.value);

    if (text <= balloons.length) setInputText(text);
    else alert("Please enter a number between 1 to 5");
  };

  const handleShoot = () => {
    const validate = balloons.filter((item) => item.id === inputText);
    console.log("validate:", validate);

    if (validate[0].status === false) alert("Added Already");

    const newballoons = balloons.map((item) =>
      item.id == inputText ? { ...item, status: false } : item
    );

    setBalloons(newballoons);
    setInputText("");
  };

  const handleEmptyBox = (id) => {
    const newballoons = balloons.map((item) =>
      item.id == id ? { ...item, status: true } : item
    );
    setBalloons(newballoons);
  };

  return (
    <div>
      <h1>Syngenta Assignment</h1>
      <div className="container">
        <div>
          <h1>Empty</h1>
          <div className="empty_container">
            {balloons
              .filter((item) => item.status === false)
              .map((item) => {
                return (
                  <div key={item.id} onClick={() => handleEmptyBox(item.id)}>
                    <Balloons bgColor={item.color} id={item.id} />
                  </div>
                );
              })}
          </div>
        </div>

        <div>
          <h1>balloons</h1>
          {balloons
            .filter((item) => item.status === true)
            .map((item) => {
              return (
                <Balloons key={item.id} bgColor={item.color} id={item.id} />
              );
            })}
        </div>

        <div>
          <h1>Input Box</h1>

          <InputContainer
            handleInputChange={handleInputChange}
            handleShoot={handleShoot}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
