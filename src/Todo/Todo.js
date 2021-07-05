import React from 'react'
import  styles from './Todo.module.css'
import TodoForm from '../TodoForm/TodoForm'
import TodoList from '../TodoList/TodoList'


export default function Todo(props) {

    return (
        <div className={styles.todo}>
            <TodoForm addNewTodo={props.addNewTodo}></TodoForm>
            <TodoList todos = {props.todos} 
            removeTodo = {props.removeTodo}
            todoIsDone = {props.todoIsDone}
            ></TodoList>
        </div>
    )
}
