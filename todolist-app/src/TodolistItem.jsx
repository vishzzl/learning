import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, markTodoComplete } from './todoslice'

export default function TodolistItem({todo,OnCompleted}) {
  const dispatch = useDispatch()
  return (
    <div>
        
       <div><span>{todo.Text}{todo.isCompleted && <p style={{ display: 'inline' }}> Completed!!</p>
       
       }{todo.isCompleted ? (
        <button onClick={() =>dispatch(deleteTodo(todo.Text)) }>Delete</button>
      ) : (
        <button onClick={() => dispatch(markTodoComplete(todo.Text))}>Mark As Completed</button>
      )}</span>
       
       
       
       </div>

            
    </div>
  )
}
