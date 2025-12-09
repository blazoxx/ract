import React, {useState} from "react";
import saveIcon from "../src/assets/bookmark+.svg";
import savedIcon from "../src/assets/bookmarked+.svg";

const Card = (props) => {
  console.log(props);

  const [saved, setSaved] = useState(false);

  const toggleSaved = () => {
    setSaved((prev) => !prev);
  };

  return (
    <div>
      {/* Card Starts */}
      <div className="bg-white rounded-[34px] shadow-lg p-6 m-4 w-72">
        {/* Top Pane */}
        <div className="flex justify-between items-start">
          <div className="bg-[#ededed85] p-1.5 rounded-full border-[2px] border-gray-200">
            <img
              src={props.img}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
          </div>

          <button
            onClick={toggleSaved}
            className={`flex items-center justify-evenly gap-1 rounded-md h-6 w-[60px] border-[1px] px-2 transition
              ${
                saved
                  ? "bg-[#a8a8a865] text-[#383838]"
                  : "bg-white border-gray-300 text-gray-500"
              }
            `}
          >
            <span className="font-semibold text-[11px]">
              {saved ? "Saved" : "Save"}
            </span>

            <img
              src={saved ? savedIcon : saveIcon}
              alt=""
              className="w-[12px]"
            />
          </button>

        </div>
        {/* Top pane ends */}
        {/* Middle Desc */}
        <div className="mt-5">
          <div className="flex items-baseline">
            <span className="text-gray-600 text-md mt-2 font-medium">
              {props.userName}
            </span>
            <span className="text-gray-400 text-[10px] mt-2 mx-[2px]">
              {props.days} days ago
            </span>
          </div>
          <div>
            <p className="text-xl font-semibold mt-0">{props.bio}</p>
          </div>
          <div>
            {/* <span className="bg-[#e1e1e185] px-2 py-1 rounded-md text-[12px] font-medium">{props.roles}</span> */}
            <div className="mt-2 flex gap-2 flex-wrap">
              {(props.roles || []).map((role, index) => (
                <span
                  key={index}
                  className="bg-[#eeeeee8e] px-2 py-1 rounded-md text-[12px] font-medium"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* Middle Desc Ends */}
        {/* Bottom Payment */}
        <div className="mt-16">
          <div className="border-t-2 border-gray-100 mb-4"></div>
          <div className="flex justify-between">
            <div>
              <div className="text-lg font-semibold">{props.cost}</div>
              <div className="text-xs text-[#949090]">{props.location}</div>
            </div>
            <button className="bg-[#333] text-gray-200 mt-2 px-3 h-8 rounded-md font-medium text-sm">
              Apply Now
            </button>
          </div>
        </div>
        {/* Bottom Payment Ends */}
      </div>
      {/* Card Ends */}
    </div>
  );
};

export default Card;
