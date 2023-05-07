import React from "react";

import Modal from "../Modal/Modal";

function Header() {
  return (
    <div className="header">
      <Modal buttonName="language" modalTitle="choose-language">
        Deneme
      </Modal>
      <h2>parolla</h2>
      <Modal buttonName="settings" modalTitle="settings">
        Settings
      </Modal>
    </div>
  );
}

export default Header;
