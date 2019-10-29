import React, { Component } from "react";
import Details from "./movie";
import axios from "axios";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      movie: undefined,
      error: false
    };
  }
  titleChange = e => {
    console.log(this.state.title);
    this.setState({ title: e.target.value });
  };

  search = event => {
    event.preventDefault();
    console.log("a");
    let url = "http://www.omdbapi.com/?apikey=d36eeaa&t=" + this.state.title;
    axios.get(url).then(r => {
      console.log(r);
      this.setState({
        movie: r
      });
    });
  };

  render() {
    let res;
    if (this.state.movie !== undefined)
      res = <Details movie={this.state.movie.data}></Details>;
    else res = <p />;
    return (
      <div>
        <p>Enter the movie name:</p>
        <input
          type="text"
          value={this.state.title}
          onChange={this.titleChange}
        ></input>
        {console.log(this.state.movie)}
        <button type="submit" onClick={this.search}>
          Search
        </button>
        {res}
      </div>
    );
  }
}

export default Search;
