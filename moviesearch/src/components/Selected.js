import React, { Component } from "react";
import axios from "axios";
import "./Selected.css";

class Selected extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.movie,
      img: undefined,
      propername: undefined,
      plot: undefined
    };
  }

  componentDidMount(){
    axios
      .get("http://www.omdbapi.com/?apikey=d36eeaa&t=" + this.state.title)
      .then(res =>
        this.setState({
          img: res.data.Poster,
          propername: res.data.Title,
          plot: res.data.Plot
        })
      );
  }

  render() {
    return (
      <div>
        <div className="card" style={{flex: 1}}>
          <div className="embed-responsive embed-responsive-1by1">
          <img src={this.state.img} className="card-img-top embed-responsive-item" width="200"/>
          </div>
          <div className="card-body">
            <h5 className="card-title">{this.state.propername}</h5>
            <p className="card-text">{this.state.plot}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Selected;
