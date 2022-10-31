import React from 'react'


export default function Form(props) {

  function handleChange(e) {
    props.setUserInput(e.target.value)
  }

  function addTodoItem(e) {
    e.preventDefault();
    props.setTodoList([
      {
        text: props.userInput,
        completed: false,
        id: Math.random() * 10000,
        priority: ['Low', 'Medium', 'High'],
        count: 0,
      },
      ...props.todoList, 
    ])
    props.setUserInput("")
  }

  return (
     <form className='form-container'>
      <input 
        className='todo-input'
        type="text"
        placeholder="Travel checklist"
        value={props.userInput}
        onChange={handleChange}
      />
      <button 
        className='todo-add-btn'
        onClick={addTodoItem}
      >+</button>
    </form>
  )
}