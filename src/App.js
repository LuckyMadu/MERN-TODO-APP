import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import TodosList from "./components/todos-list";
import CreateTodo from "./components/create-todo";
import EditTodo from "./components/edit-todo";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand" href="#">
            MERN-Stack Todo App
          </Link>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link to="/" className="nav-link" href="#">
                  Todos <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/create" className="nav-link" href="#">
                  Create Todo
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </div>
    </Router>
  );
}

export default App;
