import Reac, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(20);
  const [username, setUsername] = useState("Baibhav");
  const [users, setUsers] = useState([10, 20, 30]);

  const chnageNum = () => {
    setNum(50);
    setUsername("CodeWithBaibhav");
    setUsers([100, 200, 300]);
  };

  const [numm, setNumm] = useState(0);

  const inc_dec = (val) => {
    if (val.target.innerText === "Increase") {
      setNumm(numm + 1);
    }
    else if (val.target.innerText === "Decrease") {
      setNumm(numm - 1);
    }
    else if (val.target.innerText === "Inc by 5") {
      setNumm(numm + 5);
    }
    else{
      setNumm(numm - 5);
    }
  }

  return (
    <div className="m-4">
      <h1>
        The value of num is {num} <br /> {users} <br /> The name of user is{" "}
        {username}
      </h1>
      <button onClick={chnageNum} className="mt-2 bg-gray-200 rounded-lg px-2">
        Change
      </button>

      {/*  */}
      <div className="bg-yellow-200 h-50 w-50 mt-4 flex flex-col items-center justify-between py-5 rounded-lg">
        <div>
          <h2 className="text-8xl font-bold">0</h2>
        </div>
        <div>
          <button onClick={()=>{
            document.querySelector("h2").innerText++;
          }} className="bg-pink-200 px-2 m-2 text-md font-semibold">
            Increase
          </button>
          <button onClick={()=>{
            document.querySelector("h2").innerText--;
          }} className="bg-blue-200 px-2 m-2 text-md font-semibold">
            Decrease
          </button>
        </div>
      </div>

      {/* with useState */}
      <div className="bg-yellow-200 h-50 w-50 mt-4 flex flex-col items-center justify-between py-5 rounded-lg">
        <div>
          <p className="text-8xl font-bold flex-1">{numm}</p>
        </div>
        <div>
          <button onClick={inc_dec} className="bg-pink-200 px-2 m-2 text-md font-semibold">
            Increase
          </button>
          <button onClick={inc_dec} className="bg-blue-200 px-2 m-2 text-md font-semibold">
            Decrease
          </button>
        </div>
        <div>
          <button onClick={inc_dec} className="bg-pink-200 px-2 m-2 text-md font-semibold">
            Inc by 5
          </button>
          <button onClick={inc_dec} className="bg-blue-200 px-2 m-2 text-md font-semibold">
            Dec by 5
          </button>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default App;
