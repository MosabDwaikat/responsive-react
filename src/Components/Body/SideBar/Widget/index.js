import React from "react";
import "./Widget.css";
import WidgetPost from "./WidgetPost";

const index = ({ title, posts }) => {
  return (
    <div className="sidebar-widget">
      <h2 className="Widget-title">{title}</h2>
      {posts.map((e) => (
        <WidgetPost title={e.title} img={e.img} body={e.body} />
      ))}
    </div>
  );
};

export default index;
