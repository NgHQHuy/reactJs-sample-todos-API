import React from "react";
import "../assets/styles/Home.scss";
import ListUser from "../components/ListUser";
import ListTodos from "../components/ListTodos";

class Home extends React.Component {
  state = {
    userId: 0,
    user: "Select user",
    tasksDone: "",
  };

  onFocusUserSelection = () => {
    let userSelection = document.querySelector(".user-selection-content");
    userSelection.classList.add("user-selection-content-active");
  };

  userSelection = (id, name) => {
    this.setState({
      userId: id,
      user: name,
    });
  };

  taskCount = (tasks) => {
    this.setState({
      tasksDone: tasks,
    });
  };

  render() {
    return (
      <div className="main-content">
        <div className="user-selection">
          <span className="title-element">User</span>
          <div className="user-selection-search">
            <input
              type="search"
              className="user-selection-input"
              placeholder={this.state.user}
              onFocus={() => this.onFocusUserSelection()}
            />
          </div>
          <div className="user-selection-content">
            <ListUser userSelection={this.userSelection} />
          </div>
        </div>
        <div className="line"></div>
        <div className="user-tasks">
          <span className="title-element">Tasks</span>
          <div className="user-tasks-content">
            <ListTodos id={this.state.userId} taskCount={this.taskCount} />
          </div>
          <span className="title-element">
            Done:{" "}
            <span className="tasks-done-counting">{this.state.tasksDone} </span>
          </span>
          tasks
        </div>
      </div>
    );
  }
}

export default Home;
