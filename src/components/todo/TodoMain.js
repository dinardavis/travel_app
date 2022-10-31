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
        priority: ['Low', 'Medium', 'High'],
        count: 0,
      }, 
      {
        text:"Add international phone plan",
        id:"2",
        completed: false,
        priority: ['Low', 'Medium', 'High'],
        count: 0,
      }, 
    ]
  )
  const [userInput, setUserInput] = React.useState("")
  const [count, setCount] = React.useState(
    () => JSON.parse(localStorage.getItem("count")) || 0
  )

  React.useEffect(() => {
    localStorage.setItem("savedTodos", JSON.stringify(todoList))
  }, [todoList])

  React.useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count))
  }, [count])

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
        count={count}
        setCount={setCount}
      />
    </section>
  )
}