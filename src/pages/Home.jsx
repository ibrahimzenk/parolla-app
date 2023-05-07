import React from "react";
import ButtonMenu from "~/components/Button/ButtonMenu";
import LetterCircle from "~/components/Circle/LetterCircle";
import Header from "~/components/Header";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import useFormatMessage from "~/hooks/useFormatMessage";

function Home() {
  const buttonArray = ["competitive", "unlimited", "creative"];

  return (
    <>
      {<LetterCircle letter="P" />}

      <h1 className="second-header">{useFormatMessage("choose-game-mode")}</h1>

      <div className="button-list">
        {buttonArray.map((buttonText, index) => (
          <Link to={buttonText} key={index}>
            <ButtonMenu label={useFormatMessage(buttonText)} icon={<ArrowForwardIosIcon />} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default Home;
