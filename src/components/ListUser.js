import React from "react";
import axios from "axios";

class ListUser extends React.Component {
  state = {
    listUsers: [],
  };
  async componentDidMount() {
    let res = await axios.get("https://jsonplaceholder.typicode.com/users");
    this.setState({
      listUsers: res.data,
    });
  }
  handleOnClickUser = (id, name) => {
    let userSelection = document.querySelector(".user-selection-content");
    userSelection.classList.remove("user-selection-content-active");
    this.props.userSelection(id, name);
  };
  render() {
    let { listUsers } = this.state;
    return (
      <div className="user-selection-list">
        {listUsers &&
          listUsers.length > 0 &&
          listUsers.map((item, index) => {
            return (
              <div
                className="user-selection-item"
                key={item.id}
                onClick={() => this.handleOnClickUser(item.id, item.name)}
              >
                {item.name}
              </div>
            );
          })}
      </div>
    );
  }
}

export default ListUser;
