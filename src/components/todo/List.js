import React from 'react';
import Todo from './Todo'

export default function List(props) {
  console.log(props.todoList)

  return (
    <div className='list-container'>
      {props.todoList.map(todo => (
        <Todo 
          text={todo.text}
          key={todo.id}
          id={todo.id}
          completed={todo.completed}
          priority={todo.priority}
          count={todo.count}
          todoList={props.todoList}
          setTodoList={props.setTodoList}
        />
      ))}
    </div>
  )
}

