import React from "react";
import LinkIcon from '@mui/icons-material/Link';

function RoomInput({ inputText, buttonText }) {
  return (
    <div className="creative-rooms-link-input">
    <LinkIcon />
    <input placeholder={inputText} />
    <button> {buttonText} </button>
  </div>
  )
  
}

export default RoomInput;
