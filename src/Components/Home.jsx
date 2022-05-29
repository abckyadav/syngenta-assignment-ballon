import React, { useState } from "react";
import Balloons from "./Balloons";
import { initialballoons } from "../randomColor";
import InputContainer from "./InputContainer";

const Home = () => {
  // define states for handling the chnages in states of balloons and text input by user
  const [balloons, setBalloons] = useState(initialballoons);
  const [inputText, setInputText] = useState();

  // function that handles the input change
  const handleInputChange = (e) => {
    const text = Number(e.target.value);

    if (text <= balloons.length) setInputText(text);
    else alert("Please enter a number between 1 to 5");
  };

  // function that handles the button click
  const handleShoot = () => {
    // filtering balloons which are already added to the empty div and shows an alert
    const validate = balloons.filter((item) => item.id === inputText);
    if (validate[0].status === false) alert("Added Already");

    // changing the status of target balloons and set the current state of balloons
    const newballoons = balloons.map((item) =>
      item.id == inputText ? { ...item, status: false } : item
    );

    setBalloons(newballoons);
    setInputText("");
  };

  // this function target the empty div balloos and change their status and set the state
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
            {/* mapping of balloons in empty container based on their status, it only map those balloons whose status are false */}
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
          <h1>Balloons</h1>
          {/* mapping of balloons based on their status, it only map those balloons whose status are true */}
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
