import React from 'react'
import { BsTrash } from "react-icons/bs";
import { BsFillCheckCircleFill } from "react-icons/bs"

export default function Todo(props) {

  function deleteTodoItem() {
    props.setTodoList(props.todoList.filter(item => {
      return item.id !== props.id
    }))
  }

  // function fillCategoryMarker() {
  //   props.setTodoList(props.todoList.filter(item => {
      
  //   }))
  // }
  
  return (
    <div className='list-item'>
      <div className='category-marker'><BsFillCheckCircleFill className='category-checkmark'/></div>
      {props.text}
      <BsTrash 
        className='trash-icon'
        onClick={deleteTodoItem}  
      />
    </div>
  )
}

