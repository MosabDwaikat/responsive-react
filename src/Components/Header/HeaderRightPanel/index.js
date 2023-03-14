import React from "react";
import "./HeaderRightPanel.css";

const index = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="index.html" class="current">
            HOME
          </a>
        </li>
        <li>
          <a href="info.html">INFO</a>
        </li>
        <li>
          <a href="explore.html">EXPLORE</a>
        </li>
      </ul>
    </nav>
  );
};

export default index;
