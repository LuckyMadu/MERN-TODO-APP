import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Todo = props => (
  <tr>
    <td className={props.todo.todo_completed ? "completed" : ""}>
      {props.todo.todo_description}
    </td>
    <td className={props.todo.todo_completed ? "completed" : ""}>
      {props.todo.todo_responsible}
    </td>
    <td className={props.todo.todo_completed ? "completed" : ""}>
      {props.todo.todo_priority}
    </td>
    <td>
      <Link to={"/edit/" + props.todo._id}>Edit</Link>
    </td>
  </tr>
);

export class TodosList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/todos/")
      .then(res => {
        this.setState({
          todos: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
/*   componentDidUpdate(){
    axios
      .get("http://localhost:4000/todos/")
      .then(res => {
        this.setState({
          todos: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  } */
  todoList = () => {
    return this.state.todos.map((todo, index) => {
      return <Todo todo={todo} key={index} />;
    });
  };
  render() {
    return (
      <div>
        <h3>Todos List</h3>
        <table className="table table-striped mt-5">
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.todoList()}</tbody>
        </table>
      </div>
    );
  }
}

export default TodosList;
