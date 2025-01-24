import React from 'react'
import TodolistItem from './TodolistItem'
import FormoTodo from './FormoTodo'
import { useSelector } from 'react-redux'

export default function Todolist({OnCreatedClicked,onCompleteClicked,onDeletedClicked}) {
   const todos = useSelector(state=> state.todos.value);
   //const CompletedTodos = todos.filter(x=>x.)
  return (
    <>
    <h1>Todolist</h1>
    <FormoTodo />
    <h2>Completed Tasks:</h2>
    {todos.filter(x=>x.isCompleted === true).map((todo,index)=>(
        <TodolistItem todo={todo} />
    ))}
    <h2>Incomplete Tasks:</h2>
    {todos.filter(x=>x.isCompleted === false).map((todos,index)=>(
        <TodolistItem todo={todos} OnCompleted={onCompleteClicked}/>
    ))}
    </>
    
  )
}
