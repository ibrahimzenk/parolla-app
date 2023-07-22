import React, { useState } from "react";
import useFormatMessage from "~/hooks/useFormatMessage";
import RoomInput from "~/components/RoomSearch/RoomInput";
import ReplayIcon from "@mui/icons-material/Replay";
import SearchIcon from "@mui/icons-material/Search";


function Rooms() {
  
  return (
    <>
      <div className="creative-rooms-container">
        <h2 className="creative-rooms-header">{useFormatMessage("rooms")}</h2>
        <div>
          <h3 className="creative-text-container">Oda Bağlantısını Gir</h3>
          {<RoomInput buttonText="ODAYA GİT" inputText="https://parolla.app/oda?id=12345b" />}
        </div>
        <h5 className="creative-rooms-second-header">YA DA</h5>
        <div>
          <div className="creative-second-part">
            <h3>Listeden Seç</h3>
            <button>
              <ReplayIcon /> Tazele
            </button>
          </div>
          <div className="creative-search-room">
            <SearchIcon />
            <input placeholder="deneme"></input>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rooms;
