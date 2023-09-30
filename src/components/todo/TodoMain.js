import React from "react";
import Form from './Form';
import List from './List';

/* TODO LIST MAIN CONTAINER WRAPPER FOR FORM INPUT AND LIST CONTAINER*/

export default function TodoMain(props) {

  // Set state for default/example list items
  const [todoList, setTodoList] = React.useState(
      () => JSON.parse(localStorage.getItem("savedTodos")) || 
    [
      {
        text:"Renew passport",
        id:"1",
        completed: false,
        priority: ['Low', 'Medium', 'High'],
        count: 2,
      }, 
      {
        text:"Add intl phone plan",
        id:"2",
        completed: false,
        priority: ['Low', 'Medium', 'High'],
        count: 0,
      }, 
    ]
  )
  
  // Set initial state for form input
  const [userInput, setUserInput] = React.useState("")

  React.useEffect(() => {
    localStorage.setItem("savedTodos", JSON.stringify(todoList))
  }, [todoList])

  return (
    <section className='todo-main-container' style={{ display: props.showWidgets.showTodoWidget ? '': 'none'}}>
      <div className="widget-close-btn" onClick={props.toggleTodoWidget}>X</div>
      <Form 
        todoList={todoList}
        setTodoList={setTodoList}
        userInput={userInput}
        setUserInput={setUserInput}
      />
      <List 
        todoList={todoList}
        setTodoList={setTodoList}
      />
    </section>
  )
}