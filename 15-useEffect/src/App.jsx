import React, { useEffect, useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(10);
  const [num3, setNum3] = useState(100)

  useEffect(() => {
    console.log("use effect running");
  }, [num,num2]); // only runs when 'num' and 'num2' changes only

  const numCHanging = () => {
    console.log("num changed");
  };
  
  const num2CHanging = () => {
    console.log("num2 changed");
  };  

  const num3CHanging = () => {
    console.log("num3 changed");
  };  

  useEffect(() => {
    numCHanging();
  }, [num]); // runs when 'num' changes only

  useEffect(() => {
    num2CHanging();
  }, [num2]); // runs when 'num2' changes only

  useEffect(() => {
    num3CHanging();
  }, [num3]); // runs when 'num3' changes only

  return (
    <div>
      <button
        onMouseEnter={() => {
          setNum(num + 1);
        }}
        onMouseLeave={() => {
          setNum2(num2 + 10);
        }}
        onClick={() => {
          setNum3(num3 + 100);
        }}
      >
        {num} <br />
        {num2} <br />
        {num3}
      </button>
    </div>
  );
};

export default App;
