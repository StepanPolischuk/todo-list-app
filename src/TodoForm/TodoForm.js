import React from "react";
import styles from "./TodoForm.module.css";

export default function TodoForm(props) {
  let value = React.createRef();

  let addNew = (event) => {
    event.preventDefault();
    let newTodo = value.current.value;
    props.addNewTodo(newTodo);
    value.current.value = "";
  };

  return (
    <div className={styles.form}>
      <div className={styles.form_title}>Tasks</div>
      <div>
        <form onSubmit={addNew}>
         <input className={styles.input}
            type="text"
            variant="outlined"
            margin="normal"
            placeholder="Add new task"
            ref={value}
          ></input>
        </form>
      </div>
    </div>
  );
}
