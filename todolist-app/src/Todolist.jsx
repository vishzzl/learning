import React from 'react'
import TodolistItem from './TodolistItem'
import FormoTodo from './FormoTodo'

export default function Todolist({CompletedTodos, IncompleteTodos,OnCreatedClicked,onCompleteClicked,onDeletedClicked}) {
   
  return (
    <>
    <h1>Todolist</h1>
    <FormoTodo OnCreatedClicked={OnCreatedClicked}/>
    <h2>Completed Tasks:</h2>
    {CompletedTodos.map((todo,index)=>(
        <TodolistItem todo={todo} OnDeleted={onDeletedClicked}/>
    ))}
    <h2>Incomplete Tasks:</h2>
    {IncompleteTodos.map((todos,index)=>(
        <TodolistItem todo={todos} OnCompleted={onCompleteClicked}/>
    ))}
    </>
    
  )
}
