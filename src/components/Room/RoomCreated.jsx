import React from "react";
import KeyboardArrowRightTwoToneIcon from "@mui/icons-material/KeyboardArrowRightTwoTone";

function RoomCreated({ title, owner, questions, viewers , id }) {
  return (
    <div className="creative-room-label-menu">
      <div id="label-child1">
        {title}
      </div>
      <div id="label-child2">
        {owner} {questions} {viewers}
      </div>
      <div id="label-child3">
        ID: {id}
      </div>
    </div>
  );
}

export default RoomCreated;
