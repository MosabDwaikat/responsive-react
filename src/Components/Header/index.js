import React from "react";
import HeaderLeftPanel from "./HeaderLeftPanel";
import HeaderRightPanel from "./HeaderRightPanel";
import "./Header.css";
const index = () => {
  return (
    <header>
      <div class="header-container">
        <HeaderLeftPanel />
        <HeaderRightPanel />
      </div>
    </header>
  );
};

export default index;
