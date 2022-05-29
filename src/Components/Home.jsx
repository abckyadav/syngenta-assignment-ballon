import React from "react";
import Balloons from "./Balloons";

const getRandomColor = () => {
  var letters = "0123456789ABCDEF".split("");
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
};

const initialBallons = [
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
  return (
    <div>
      <h1>Syngenta Assignment</h1>
      <div className="container">
        <div>
          <h1>Empty</h1>
          <div className="empty_container"></div>
        </div>

        <Balloons />

        <div>
          <h1>Input Box</h1>
          <div className="input_container">
            <input
              type="number"
              placeholder="Enter number between 1 to 5 only"
            />
            <button className="button">Shoot</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
