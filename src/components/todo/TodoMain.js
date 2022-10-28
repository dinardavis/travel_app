import React from "react";
import Form from './Form';
import List from './List';

export default function TodoMain() {
  const [todoList, setTodoList] = React.useState(JSON.parse(localStorage.getItem("savedTodos")) || []
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