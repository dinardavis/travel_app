import React from 'react'
import { BsTrash } from "react-icons/bs";
import { BsFillCheckCircleFill } from "react-icons/bs"
import { BsCheck2Square } from "react-icons/bs"

export default function Todo(props) {

  console.log(props.completed)

  function deleteTodoItem() {
    props.setTodoList(props.todoList.filter(item => {
      return item.id !== props.id
    }))
  }
  
  return (
    <div className='list-item'>
      <div className='category-marker'><BsFillCheckCircleFill className='category-checkmark'/></div>
      {props.text}
      <BsCheck2Square 
        className='todo-icon check-icon'
      />
      <BsTrash 
        className='todo-icon trash-icon'
        onClick={deleteTodoItem}  
      />
    </div>
  )
}

