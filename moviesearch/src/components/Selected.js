import React, { Component } from "react";
import axios from "axios";
class Selected extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.movie,
      img: "",
      propername: ""
    };
  }

  render() {
    axios
      .get("http://www.omdbapi.com/?apikey=d36eeaa&t=" + this.state.title)
      .then(res =>
        this.setState({
          img: res.data.Poster,
          propername: res.data.Title
        }).catch(console.log("Error."))
      );
    return (
      <div>
        <img src={this.state.img}></img>
        <h5 className="display-5">{this.state.propername}</h5>
      </div>
    );
  }
}

export default Selected;
