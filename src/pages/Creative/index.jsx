import React from "react";
import useFormatMessage from "~/hooks/useFormatMessage";
import ButtonMenu from "~/components/Button/ButtonMenu";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

function Creative() {
  const creativeButtonArray = [
    { path: "rooms", name: "look-rooms" },
    { path: "createroom", name: "create-room" },
    { path: "myrooms", name: "recently-rooms" },
  ];

  return (
    <div>
      <div className="creative-text-container">
        <h2 className="creative-text-header">{useFormatMessage("question-answer")}</h2>
        <h2 className="creative-text">{useFormatMessage("check-out-rooms")}</h2>
      </div>
      {creativeButtonArray.map((item, index) => (
        <Link to={item.path}>
          <ButtonMenu label={useFormatMessage(item.name)} icon={<ArrowForwardIosIcon />} key={index} />
        </Link>
      ))}
    </div>
  );
}

export default Creative;
