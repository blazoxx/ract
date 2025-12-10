import React from "react";

const App = () => {
  function lickHandler() {
    console.log("Button is Clicked");
    document.querySelector("h1").classList.toggle("bg-pink-200");
    // document.querySelector('h1').classList.toggle('bg-blue-200')
  }

  function licker() {
    console.log("Mouse is In");
    document.querySelector("h1").classList.toggle("text-pink-200");
  }

  function userTyping(value) {
    console.log(value);
  }

  const handleScroll = (val) => {
    // console.log(val.deltaY);
    if (val.deltaY > 0) {
      console.log("Scrolling Down");
    } else {
      console.log("Scrolling Up");
    }
  };

  return (
    <div>
      <h1 className="bg-blue-200">Hello, Baibhav</h1>
      <button
        className="p-2 rounded-full m-4 bg-pink-400"
        onMouseEnter={licker}
        onClick={lickHandler}
      >
        Lick me to turn over
      </button>
      <button
        className="p-2 rounded-full bg-green-400"
        onClick={() => {
          console.log("Hello Guys");
        }}
      >
        Ahaaa
      </button>

      <input
        className="m-2 p-2 bg-pink-500 rounded-xl border-2"
        type="text"
        onChange={(elem) => {
          userTyping(elem.target.value);
        }}
        placeholder="Enter Name"
      />

      <div
        className="w-20 h-20 bg-red-500"
        onMouseMove={(elem) => {
          console.log(elem.clientX, elem.clientY);
        }}
      ></div>

      <div onWheel={handleScroll} className="h-screen overflow-y-scroll">
      <div className="h-100 w-screen bg-[#111]"></div>
      <div className="h-100 w-screen bg-[#222]"></div>
      <div className="h-100 w-screen bg-[#333]"></div>
      </div>
    </div>
  );
};

export default App;
