import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

class ListTodos extends React.Component {
  state = {
    id: 0,
    listTodos: [],
  };

  taskCounting = () => {
    let listTodos = [...this.state.listTodos];
    let i = 0;
    listTodos.filter((item) => (item.completed === true ? i++ : i));
    let taskDone = "" + i + "/" + listTodos.length;
    this.props.taskCount(taskDone);
  };

  showTodos = (todos) => {
    this.setState({
      id: this.props.id,
      listTodos: todos,
    });
    this.taskCounting();
  };
  async componentDidUpdate(preProps = this.props, prevState = this.state) {
    let id = this.props.id;
    let res = await axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => console.log(error));
    res.sort((a, b) => a.completed - b.completed);
    if (prevState.id !== this.props.id) {
      this.showTodos(res);
    }
  }

  handleOnClickMarkDone = (id) => {
    let listTodos = [...this.state.listTodos];
    listTodos.filter((item) =>
      item.id === id ? (item.completed = true) : item.completed
    );
    listTodos.sort((a, b) => a.completed - b.completed);
    this.setState({
      listTodos: listTodos,
    });
    this.taskCounting();
    toast.success("Mark done!");
  };

  render() {
    let { listTodos } = this.state;
    return (
      <>
        <div className="user-tasks-list">
          {listTodos && listTodos.length > 0 ? (
            listTodos.map((item, index) => {
              return (
                <div className="user-tasks-list-item" key={item.id}>
                  {!item.completed ? (
                    <>
                      <i className="task-status icon-check-minus"></i>
                      <span>{item.title}</span>
                      <button
                        type="button"
                        className="btn-mark-done"
                        onClick={() => this.handleOnClickMarkDone(item.id)}
                      >
                        Mark done
                      </button>
                    </>
                  ) : (
                    <>
                      <i className="task-status-checked icon-check"></i>
                      <span>{item.title}</span>
                    </>
                  )}
                </div>
              );
            })
          ) : (
            <div className="no-data">No data</div>
          )}
        </div>
      </>
    );
  }
}

export default ListTodos;
