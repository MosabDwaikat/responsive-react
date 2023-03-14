import React from "react";
import Main from "./Main";
import SideBar from "./SideBar";
import "./Body.css";
const index = () => {
  return (
    <div className="body-container body-container-flex">
      <Main />
      <SideBar />
    </div>
  );
};

export default index;
