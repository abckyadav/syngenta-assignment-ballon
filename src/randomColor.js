const getRandomColor = () => {
  let letters = "0123456789ABCDEF".split("");
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
};

export const initialballoons = [
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
