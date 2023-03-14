import React from "react";
import "./PostFeatured.css";
const index = () => {
  return (
    <article class="PostFeatured-article">
      <h2 className="PostFeatured-article-title">
        KAI'SA: DAUGHTER OF THE VOID
      </h2>
      <img src="./imgs/kaisa.jpg" alt="" class="PostFeatured-article-img" />
      <p class="PostFeatured-article-info">Feb 13, 2023 | 861 views</p>
      <p class="PostFeatured-article-body">
        Claimed by the Void when she was only a child, Kai'Sa managed to survive
        through sheer tenacity and strength of will. Her experiences have made
        her a deadly hunter and, to some, the harbinger of a future they would
        rather not live to see. Having entered into an uneasy symbiosis with a
        living Void carapace, the time will soon come when she must decide
        whether to forgive those mortals who would call her a monster, and
        defeat the coming darkness together… or simply to forget, as the Void
        consumes the world that left her behind.
      </p>
      <a href="" class="PostFeatured-article-read-more">
        continue reading
      </a>
    </article>
  );
};

export default index;
