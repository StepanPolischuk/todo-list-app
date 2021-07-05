let rerender = () => {};

let state = {
  todos: []
};

export let addNewTodo = (newTodo) => {
  if(newTodo.trim().length>0){
  let New = {
    todo: newTodo,
    isDone: false,
  };
  state.todos.push(New);
  rerender(state);
}};

export let removeTodo = (todoIndex) => {
  state.todos = state.todos.filter((_, index) => index !== todoIndex);
  rerender(state);

};

export let todoIsDone = (todoIndex) => {
  state.todos[todoIndex].isDone = !state.todos[todoIndex].isDone;
  rerender(state);
}

export const subscribe = (obrerver) => {
  rerender = obrerver;
};

export default state;
