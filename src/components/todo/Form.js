import React from 'react'


export default function Form(props) {

  function handleChange(e) {
    props.setUserInput(e.target.value)
  }

  function addTodoItem(e) {
    e.preventDefault();
    props.setTodoList([
      ...props.todoList, 
      {
        text: props.userInput,
        completed: false,
        id: Math.random() * 10000
      }
    ])
    props.setUserInput("")
  }

  return (
     <form className='form-container'>
      <input 
        className='todo-input'
        type="text"
        placeholder="Add To-do"
        value={props.userInput}
        onChange={handleChange}
      />
      <button 
        className='add-btn'
        onClick={addTodoItem}
      >+</button>
    </form>
  )
}