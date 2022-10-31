import React from 'react'
import { BsTrash } from "react-icons/bs";
import { BsFillCheckCircleFill } from "react-icons/bs"
import { BsCheck2Square } from "react-icons/bs"

export default function Todo(props) {

  const styles = {
    textDecoration: props.completed ? "line-through" : "none"
  }

  function markCompleted(id){
    props.setTodoList(prevList => prevList.map(item => {
      return item.id === props.id ?
      {...item, completed: !item.completed} :
      item
    }))
  }

  function deleteTodoItem() {
    props.setTodoList(props.todoList.filter(item => {
      return item.id !== props.id
    }))
  }
  
  return (
    <div className='list-item' style={styles}>
      <div className='category-marker'><BsFillCheckCircleFill className='category-checkmark'/></div>
      {props.text}
      <BsCheck2Square 
        className='todo-icon check-icon'
        onClick={() => markCompleted(props.id)}
      />
      <BsTrash 
        className='todo-icon trash-icon'
        onClick={deleteTodoItem}  
      />
    </div>
  )
}

