import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {

  const navigate = useNavigate();

  return (
    <div className="px-9 flex items-center">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="font-semibold bg-red-400 rounded px-4 py-2 mx-2 cursor-pointer active:scale-95"
      >
        Return to Home Page
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="font-semibold bg-red-400 rounded px-4 py-2 mx-2 cursor-pointer active:scale-95"
      >
        Back
      </button>
      <button
        onClick={() => {
          navigate(+1);
        }}
        className="font-semibold bg-red-400 rounded px-4 py-2 mx-2 cursor-pointer active:scale-95"
      >
        Next
      </button>
    </div>
  );
};

export default Navbar2;
