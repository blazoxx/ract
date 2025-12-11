import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState({ user: "Baibhav", age: 20 });

  const [first, setFirst] = useState([1, 2, 3, 4, 5]);

  const [dum, setDum] = useState(10)

  const btnClicked = () => {
    const newNum = { ...num }; //spread operator //destructuring
    console.log(num);
    newNum.user = "John";
    newNum.age = 22;
    console.log(newNum);
    setNum(newNum);
  };

  const btnLicked = () => {
    // const newFirst = [...first]; //destructuring
    // newFirst.push(6);
    // console.log(newFirst)
    // setFirst(newFirst);
    setFirst([...first, 6]); //spread operator - concise way to add an element to an array
    setFirst((prevFirst) => [...prevFirst, 7]); //functional way to update state based on previous state
  };

  const btnDumClicked = () => {
    // batch updates in react 18+
    setDum((prevDum) => prevDum + 1);
    setDum((prevDum) => prevDum + 1);
    setDum((prevDum) => prevDum + 1);
    setDum((prevDum) => prevDum + 1);
  };

  return (
    <div className="bg-gray-900 h-screen text-white p-4">
      <div>
        <h1 className="">{num.user}</h1>
        <h1 className="">{num.age}</h1>
        <button
          className="bg-pink-200 p-2 py-1 rounded-lg mt-4"
          onClick={btnClicked}
        >
          Click Me
        </button>
      </div>

      <div className="mt-10">
        <h1>{first}</h1>
        <button
          className="bg-blue-200 px-2 p-1 rounded-lg mt-2"
          onClick={btnLicked}
        >
          Lick Me
        </button>
      </div>

      <div className="mt-10">
        <h1 className="">{dum}</h1>
        <button
          className="bg-pink-200 p-2 py-1 rounded-lg mt-4"
          onClick={btnDumClicked}
        >
          Click Me
        </button>
      </div>
    </div>
  );
};

export default App;
