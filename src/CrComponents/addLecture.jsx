import React, { Component } from "react";
import firebase from "../firebase";
class AddLecture extends Component {
  state = {
    show: false,
    link: "",
    subject: "",
    subjectCode: "",
    teacher: "",
    text: "",
    group: "",
  };

  // toggle show state
  showModal = () => {
    this.setState({ show: true });
  };
  hideModal = () => {
    this.setState({ show: false });
  };

  // modal show/hide class
  showHideClassName = () => (this.state.show ? "" : "d-none");

  styles = {
    position: "fixed",
    display: "block",
    background: "pink",
    color: "black",
    width: "80%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: 1,
    boxShadow: "2px 2px 10px 10px rgba(255, 31, 255, 0.226)",
  };

  render() {
    return (
      <div>
        <button className="btn-info btn-lg mb-4" onClick={this.showModal}>
          Add Lecture +
        </button>
        <div className={this.showHideClassName()} style={this.styles}>
          {this.getForm()}
          <button className="btn btn-info m-2" onClick={this.hideModal}>
            Close
          </button>
        </div>
      </div>
    );
  }

  getForm = () => {
    return (
      <div>
        <form className="m-2" onSubmit={this.callAddLecture}>
          <h3>Add Lecture Details:</h3>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label>Subject:</label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                value={this.state.subject}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label>Link:</label>
              <input
                type="text"
                className="form-control"
                id="link"
                name="link"
                value={this.state.link}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label>Teacher:</label>
              <input
                type="text"
                className="form-control"
                id="teacher"
                name="teacher"
                onChange={this.handleChange}
                value={this.state.teacher}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label>Subject Code:</label>
              <input
                type="text"
                className="form-control"
                id="subjectCode"
                name="subjectCode"
                onChange={this.handleChange}
                value={this.state.subjectCode}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-row">
              <div className="col-sm-4">
                <label>Start Time</label>
                <input
                  className="form-control"
                  type="datetime-local"
                  name="startTime"
                  min={Date.now()}
                  name="startTime"
                  id="startTime"
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="col-sm-4">
                <label>End Time</label>
                <input
                  className="form-control"
                  type="datetime-local"
                  name="endTime"
                  min={Date.now()}
                  name="endTime"
                  id="endTime"
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="col-sm-4">
                <label>Group</label>
                <input
                  className="form-control"
                  type="text"
                  name="group"
                  name="group"
                  id="group"
                  onChange={this.handleChange}
                  placeholder="leave blank for whole class!"
                />
              </div>
            </div>
            <label>Description:</label>
            <textarea
              className="form-control col-sm-10"
              id="text"
              style={{ margin: "auto" }}
              value={this.state.text}
              name="text"
              onChange={this.handleChange}
              placeholder="no info provided"
              required
            />
          </div>
          <button className="btn btn-success" type="submit">
            Add Lecture
          </button>
        </form>
      </div>
    );
  };

  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  callAddLecture = (e) => {
    e.preventDefault(); // preventing reload
    const start = Date.parse(this.state.startTime),
      end = Date(this.state.endTime);

    const startDate = new Date(start),
      endDate = new Date(end);

    const newLecture = {
      subject: this.state.subject,
      subjectCode: this.state.subjectCode,
      teacher: this.state.teacher,
      startTime: firebase.firestore.Timestamp.fromDate(startDate),
      endTime: firebase.firestore.Timestamp.fromDate(endDate),
      link: this.state.link,
      text: this.state.text,
      group: this.state.group,
    };
    this.setState({ show: false });
    this.props.addLecture(newLecture);
    this.setState({
      link: "",
      subject: "",
      subjectCode: "",
      teacher: "",
      startTime: new Date(0),
      endTime: new Date(0),
      text: "",
      group: "",
    });
  };
}

export default AddLecture;
