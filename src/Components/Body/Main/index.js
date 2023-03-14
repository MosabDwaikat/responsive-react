import React from "react";
import PostFeatured from "./PostFeatured";
import PostRecent from "./PostRecent";
import "./Main.css";

const index = () => {
  const posts = [
    {
      title: "XAYAH: THE VASTAYAN REBEL",
      img: "imgs/xayah.jpg",
      info: "Jan 11, 2023 | 533 views",
      body: "Deadly and precise, Xayah is a vastayan revolutionary waging a personal war to save her people.\
      She uses her speed, guile, and razor-sharp feather blades to cut down anyone who stands in her way.\
       Xayah fights alongside her partner and lover, Rakan, to protect their dwindling tribe,\
        and restore their race to her vision of its former glory.",
    },
    {
      title: "JHIN: THE VIRTUOSO",
      img: "imgs/Jhin.jpg",
      info: "Dec 10, 2022 | 612 views",
      body: "Jhin is a meticulous criminal psychopath who believes murder is art.\
       Once an Ionian prisoner, but freed by shadowy elements within Ionia's ruling council,\
        the serial killer now works as their cabal's assassin. Using his gun as his paintbrush,\
         Jhin creates works of artistic brutality, horrifying victims and onlookers.\
          He gains a cruel pleasure from putting on his gruesome theater,\
           making him the ideal choice to send the most powerful of messages: terror.",
    },
    {
      title: "ZED: THE MASTER OF SHADOWS",
      img: "imgs/Zed.jpg",
      info: "Nov 2, 2022 | 788 views",
      body: "Utterly ruthless and without mercy, Zed is the leader of the Order of Shadow,\
       an organization he created with the intent of militarizing Ionia's magical and martial traditions\
        to drive out Noxian invaders. During the war, desperation led him to unlock the secret shadow\
         form—a malevolent spirit magic as dangerous and corrupting as it is powerful.\
          Zed has mastered all of these forbidden techniques to destroy anything\
           he sees as a threat to his nation, or his new order.",
    },
  ];
  return (
    <main>
      <PostFeatured />

      {posts.map((p) => (
        <PostRecent title={p.title} img={p.img} body={p.body} info={p.info} />
      ))}
    </main>
  );
};

export default index;
