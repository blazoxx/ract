import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

const App = () => {
  const userName = "DGhjsd";
  const age = 21;

  return (
    <div className="">
      <div className="bg-pink-500 p-4 text-white">
        <Navbar />
      </div>
      <h1 className="mt-4 mx-4 text-pink-200">Hello I'm {userName}</h1>
      <p className="mx-4 text-pink-200">And I'm {age} years old.</p>
      <div className="text-2xl bg-cyan-200 p-5 text-center m-5 rounded-2xl">
        <h2 className="font-bold">Baibhav Pratap Singh - Direct</h2>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
          facere?
        </p>
      </div>
      <Card /> {/*type to call component*/}
      {Card()} {/*type to call component*/}
    </div>
  );
};

export default App;
