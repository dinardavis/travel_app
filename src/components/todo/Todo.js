import React from 'react'
import { BsTrash } from "react-icons/bs"
import { BsCheck2Square } from "react-icons/bs"

export default function Todo(props) {
  const [count, setCount] = React.useState(0)

  const listStyles = {
    textDecoration: props.completed ? "line-through" : "none"
  }

  const checkmarkStyles = {
    color: props.completed ? "#f41e1e" : "#a3a7bf"
  }

  let bgPriorityColor = "low"
  let borderPriorityColor = 'low'

  if(props.priority[count] === 'low') {
    bgPriorityColor = '#00accb'
    borderPriorityColor = '1.5px solid #00accb'
  } else if(props.priority[count] === 'medium') {
    bgPriorityColor = '#e6ab3e'
    borderPriorityColor = '1.5px solid #e6ab3e'
  } else if(props.priority[count] === 'high') {
    bgPriorityColor = '#f41e1e'
    borderPriorityColor = '1.5px solid #f41e1e'
  }

  const priorityStyles = {
    backgroundColor: bgPriorityColor,
    border: borderPriorityColor,
  }

  function setPriorityLevel(id) {
    if(count === 2) {
      setCount(0)
    } else {
      setCount(prevCount => prevCount = prevCount + 1)
    }
  }

  console.log(props.priority[0])

  function markCompleted(id){
    props.setTodoList(prevList => prevList.map(item => {
      return item.id === id ?
      {...item, completed: !item.completed} :
      item
    }))
  }

  function deleteTodoItem(id) {
    props.setTodoList(props.todoList.filter(item => {
      return item.id !== id
    }))
  }
  
  return (
    <div className='list-item' style={listStyles}>
      <div 
        className='category-marker' 
        style={priorityStyles}
        title={`${props.priority[count]} priority`}
        onClick={setPriorityLevel}
      >
      </div>
      {props.text}
      <BsCheck2Square 
        className='todo-icon check-icon'
        style={checkmarkStyles}
        onClick={() => markCompleted(props.id)}
      />
      <BsTrash 
        className='todo-icon trash-icon'
        onClick={() => deleteTodoItem(props.id)}  
      />
    </div>
  )
}

