import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import state, {
  subscribe,
  addNewTodo,
  removeTodo,
  todoIsDone
} from "./redux/state";

export let rerender = (state) => {
 
  ReactDOM.render(
    <App
      todos={state.todos}
      addNewTodo={addNewTodo}
      removeTodo={removeTodo}
      todoIsDone ={todoIsDone}
    />,
    document.getElementById("root")
  );
};

rerender(state);
subscribe(rerender);
