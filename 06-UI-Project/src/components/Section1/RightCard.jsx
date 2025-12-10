import React from "react";
import "remixicon/fonts/remixicon.css";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="shrink-0 h-full w-70 rounded-4xl overflow-hidden relative">
      <img className="h-full w-full object-cover" src={props.img} alt="" />
      <RightCardContent id={props.id} color={props.color} tag={props.tag} bio={props.bio}/>
    </div>
  );
};

export default RightCard;
