import React from "react";
import Widget from "./Widget";
import "./SideBar.css";
const para =
  "Composed of both the material and spirit realms, Runeterra is all that\
    separates the celestial powers of creation from the abyssal threat of\
    all undoing. This is a magical world unlike any other--inhabited by\
    peoples both fierce and wondrous.";
const posts = [
  { img: "imgs/yone.jpg", title: "YONE: THE UNFORGOTTEN" },
  { img: "imgs/Irelia.jpg", title: "IRELIA: THE BLADE DANCER" },
  { img: "imgs/Lucian.jpg", title: "LUCIAN: THE PURIFIER" },
];

const index = () => {
  return (
    <aside class="sidebar ">
      <Widget
        title="More Info"
        posts={[{ img: "imgs/runeterra.jpg", body: para }]}
      />
      <Widget title="SEE ALSO" posts={posts} />
    </aside>
  );
};

export default index;
