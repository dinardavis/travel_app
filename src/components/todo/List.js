import React from 'react';
import Todo from './Todo'

export default function List(props) {



  return (
    <div className='list-container'>
      {props.todoList.map(todo => (
        <Todo 
          text={todo.text}
          key={todo.id}
          id={todo.id}
          completed={todo.completed}
          priority={todo.priority}
          todoList={props.todoList}
          setTodoList={props.setTodoList}
        />
      ))}
    </div>
  )
}