import React, { useState } from "react";
import Balloons from "./Balloons";

const getRandomColor = () => {
  var letters = "0123456789ABCDEF".split("");
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
};

const initialballoons = [
  {
    id: 1,
    color: getRandomColor(),
    status: true,
  },
  {
    id: 2,
    color: getRandomColor(),
    status: true,
  },
  {
    id: 3,
    color: getRandomColor(),
    status: true,
  },
  {
    id: 4,
    color: getRandomColor(),
    status: true,
  },
  {
    id: 5,
    color: getRandomColor(),
    status: true,
  },
];

const Home = () => {
  const [balloons, setBalloons] = useState(initialballoons);
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);
  };

  const handleShoot = () => {
    const newballoons = balloons.map((item) =>
      item.id == inputText ? { ...item, status: false } : item
    );
    setBalloons(newballoons);
    console.log("newballoons:", newballoons);
  };
  const handleEmptyBox = (id) => {
    const newballoons = balloons.map((item) =>
      item.id == id ? { ...item, status: true } : item
    );
    setBalloons(newballoons);
    console.log("newballoons:", newballoons);
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
          <div className="input_container">
            <input
              type="number"
              placeholder="Enter number between 1 to 5 only"
              onChange={handleInputChange}
            />
            <button onClick={handleShoot}>Shoot</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
