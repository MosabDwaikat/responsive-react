import React from "react";
import "./PostRecent.css";
const index = ({ title, body, img, info }) => {
  return (
    <article class="PostRecent-article">
      <div class="PostRecent-article-main">
        <h2 class="PostRecent-article-title">{title}</h2>
        <p class="PostRecent-article-body">{body}</p>
        <a href="" class="PostRecent-article-read-more">
          continue reading
        </a>
      </div>
      <div class="PostRecent-article-secondary">
        <img src={img} alt="" class="PostRecent-article-image" />
        <p class="PostRecent-article-info">{info}</p>
      </div>
    </article>
  );
};

export default index;
