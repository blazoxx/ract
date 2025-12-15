import React from "react";
import axios from "axios";
import { useState } from "react";

const App = () => {
  // use data
  const [data, setData] = useState([]);

  // Incorrect: Missing await to handle the promise returned by fetch and response.json()
  // function getData() {
  //   const response = fetch("https://jsonplaceholder.typicode.com/users/1");

  //   console.log(response);
  // }

  // // Corrected: Using async/await to properly handle the asynchronous fetch call
  // async function asyGetData() {
  //   const response = await fetch(
  //     "https://jsonplaceholder.typicode.com/users/1"
  //   );
  //   const data = await response.json();
  //   // console.log(response)
  //   console.log(data);
  // }

  // // by axios
  // const axiosGet = () => {
  //   const response3 = axios.get("https://jsonplaceholder.typicode.com/users/1");

  //   console.log(response3);
  // };

  const axiosGetData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setData(response.data);
    // console.log(data);
  };

  return (
    <div className="text-red-200 p-5 space-y-3 space-x-3">
      {/* <button onClick={getData}>Get Data</button>
      <button onClick={asyGetData}>Get Async Data</button>
      <button onClick={axiosGet}>Get Axios Data</button> */}
      <button onClick={axiosGetData}>Get Async Axios Data</button>

      <div>
        {data.map(function (elem,index) {
          return <h3>{index} Hello {elem.author}</h3>;
        })}
      </div>
    </div>
  );
};

export default App;
