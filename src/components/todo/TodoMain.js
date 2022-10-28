import React from "react";
import Form from './Form';
import List from './List';

export default function TodoMain() {
  const [todoList, setTodoList] = React.useState([
    {
    text:"Renew Passport",
    key:"1",
    id:"1",
    },
    {
      text:"Setup International Phone Plan",
      key:"2",
      id:"2",
      },
  ])
  const [userInput, setUserInput] = React.useState("")

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