import React, { Component } from "react";
import Details from "./Details";
import Loading from "./Loading";
import axios from "axios";
import Navbar from "./Navbar";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      movie: undefined,
      loading: false
    };
  }
  titleChange = e => this.setState({ title: e.target.value });

  search = event => {
    if (this.state.loading === false) event.preventDefault();
    this.setState({
      loading: true,
      movie: undefined
    });
    let url = "http://www.omdbapi.com/?apikey=d36eeaa&t=" + this.state.title;
    axios.get(url).then(r => {
      this.setState({
        movie: r,
        loading: false
      });
    });
  };

  componentDidMount() {
    this.setState({
      loading: false
    });
  }
  render() {
    let res, load;
    if (this.state.movie !== undefined)
      res = <Details movie={this.state.movie.data}></Details>;
    else res = <p />;
    load = <Loading show={this.state.loading} />;
    return (
      <div>
        <div className="jumbotron">
          <p>Enter the movie name:</p>
          <input
            type="text"
            value={this.state.title}
            onChange={this.titleChange}
          ></input>
          <button
            className="btn btn-success"
            type="submit"
            onClick={this.search}
          >
            Search
          </button>
          {load}
          {res}
        </div>
      </div>
    );
  }
}

export default Search;
