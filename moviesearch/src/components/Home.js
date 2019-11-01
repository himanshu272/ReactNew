import React from "react";
import Navbar from "./Navbar";
import Selected from "./Selected";

function Home() {
  return (
    <div>
      <Navbar />
      <Selected movie="Avengers Endgame" />
      <Selected movie="Iron Man" />
      <Selected movie="Justice League" />
    </div>
  );
}

export default Home;
