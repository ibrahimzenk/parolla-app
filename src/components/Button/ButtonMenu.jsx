import React from "react";

function ButtonMenu({ label, icon }) {
  return (
    <button className="button-menu">
      {label} {icon}
    </button>
  );
}

export default ButtonMenu;
