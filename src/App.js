import "./App.css";
import Todo from "./Todo/Todo";

function App(props) {
  return (
      <div className="App">
            <Todo todos={props.todos} 
            addNewTodo={props.addNewTodo} 
            removeTodo={props.removeTodo}  
            todoIsDone={props.todoIsDone}/>
      </div>
  );
}

export default App;
