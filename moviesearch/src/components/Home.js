import React from "react";
import Selected from "./Selected";
import "./Selected.css";

function Home() {
  return (
    <div>
      <div className="card-deck" style={{display: 'flex', flexDirection: 'row'}}>
      <Selected movie="Avengers Endgame" />
      <Selected movie="Iron Man" />
      <Selected movie="Justice League" />
      </div>
    </div>
  );
}

export default Home;
