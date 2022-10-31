import React from "react";
import Form from './Form';
import List from './List';

export default function TodoMain() {
  const [todoList, setTodoList] = React.useState(
      () => JSON.parse(localStorage.getItem("savedTodos")) || 
    [
      {
        text:"Renew passport",
        id:"1",
        completed: false,
        priority: ['low', 'medium', 'high'],
      }, 
      {
        text:"Add international phone plan",
        id:"2",
        completed: false,
        priority: ['low', 'medium', 'high'],
      }, 
    ]
  )
  const [userInput, setUserInput] = React.useState("")

  React.useEffect(() => {
    localStorage.setItem("savedTodos", JSON.stringify(todoList))
  }, [todoList])

  return (
    <section className='todo-main-container'>
 
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