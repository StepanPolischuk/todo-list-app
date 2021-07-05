import React from "react";
import styles from "./TodoList.module.css";

export default function TodoList(props) {
  let checkbox = React.createRef();

  const ToDoItem = (props) => {
    return (
      <div className={props.isDone ? styles.item_isDone : styles.item}>
        <label>
        <div className={styles.checkbox}>
          <input
            type="checkbox"
            checked={props.isDone}
            ref={checkbox}
            onClick={() => props.todoIsDone(props.index)}
          ></input>
        </div>
        <div className={styles.item__text}>{props.todo}</div>
        </label>
        <div className={styles.btn}>
          <button onClick={() => props.removeTodo(props.index)}>Delete</button>
        </div>
      </div>
    );
  };

  let TodoItems = props.todos.map((a, index) => (
    <ToDoItem
      todo={a.todo}
      removeTodo={props.removeTodo}
      index={index}
      isDone={a.isDone}
      todoIsDone={props.todoIsDone}
    />
  ));

  let TodoItemsReversed = TodoItems.reverse();

  if (TodoItemsReversed.length>0) {
    return <div className={styles.list}>{TodoItemsReversed}</div>;
  }
  else return <div className={styles.list}>Add the first task</div>
}
