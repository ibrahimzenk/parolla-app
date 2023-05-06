import React from "react";
import ButtonMenu from "./components/Button/ButtonMenu";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Header from "./components/Header";
import LetterCircle from "./components/Circle/LetterCircle";

function App() {
  const buttonArray = ["Test1", "Test2", "Test3"];

  return (
    <div className="big-container">
      <Header />
      <div className="small-container">
        {<LetterCircle letter="P" />}
        <h1 className="second-header">Oyun Modu Seç</h1>
        <div className="button-list">
          {buttonArray.map((buttonText, index) => (
            <ButtonMenu label={buttonText} icon={<ArrowForwardIosIcon />} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
