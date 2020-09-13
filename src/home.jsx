import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./assets/css/home.css";
import MainPage from "./StuComponents/mainPage";

class Home extends Component {
  state = {
    studentCode: ""
  };
  componentDidMount(){
    this.setState({studentCode: localStorage.getItem('studentCode')});
  }
  imageStyle = {
    width: "30%",
    zIndex: "-1",
    marginLeft: "38%",
    marginTop: "-10%",
  };

  getImage = () => {
    return (
      <div className="container-fluid">
        <img
          className="img-fluid"
          src={require("./assets/image/title.png")}
          alt="this is img"
        />
      </div>
    );
  };

  render() {
    const display = this.state.studentCode ? <MainPage studentCode={this.state.studentCode} /> 
    : 
    (<div>
      <header className="titleheader">
        <h1 className="title">
          Link <br />
          Aaya <br />
          Kya?
        </h1>
      </header>
      <div className="image" style={this.imageStyle}>
        {this.getImage()}
      </div>
      {/* <div className="container p-0"> */}
      <div className="container-fluid" style={{ width: "40%" }}>
        <div className="row">
          <div className="col-md-6 text-center">
            <Link to="/student">
              <li className="btn btn-lg btn-success pl-4 pr-4 mode-btn mb-2">
                Student
              </li>
            </Link>
          </div>
          <div className="col-md-6 ">
            <Link to="/cr">
              <li className="btn btn-lg btn-danger pl-4 pr-4 mode-btn">
                Class Representative
              </li>
            </Link>
          </div>
        </div>
      </div>
    </div>)
    return display
  }
}

export default Home;
