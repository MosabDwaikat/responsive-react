import React from "react";
import "./WidgetPost.css";
const index = ({ img, title, body }) => {
  return (
    <div className="WidgetPost-container">
      <img src={img} alt="" className="WidgetPost-image" />
      {title && <h2 className="WidgetPost-title">{title}</h2>}
      {body && <p className="WidgetPost-body">{body}</p>}
    </div>
  );
};

export default index;
