import React from "react";

function Details(props) {
  return (
    <div>
      <h3> Details: </h3>
      <img src={props.movie.Poster}></img>
      <h4> Movie name: {props.movie.Title} </h4>
      <h4> Released in: {props.movie.Year}</h4>
      <h4> Rated: {props.movie.Rated}</h4>
      <h4> Plot: {props.movie.Plot}</h4>
    </div>
  );
}

export default Details;
