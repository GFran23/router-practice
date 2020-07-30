import React from "react";
import "./Home.css";
import HomeJumbotron from "./HomeJumbotron";

function Home() {
  return (
    <>
      <HomeJumbotron />
      <div class="text">
        Hello, I'm <span class="highlight">George Francis</span>.
        <br />
        I'm a full-stack web developer.
      </div>
      {/* <div class="button" dest="about">
        View my work <i class="mdi-arrow-right"></i>
      </div> */}
    </>
  );
}

export default Home;
