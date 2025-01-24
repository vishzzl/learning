import React from 'react'

export default function TodolistItem({todo,OnCompleted,OnDeleted}) {
    console.log(todo)
  return (
    <div>
        
       <div><span>{todo.Text}{todo.isCompleted && <p style={{ display: 'inline' }}> Completed!!</p>
       
       }{todo.isCompleted ? (
        <button onClick={() => OnDeleted(todo.Text)}>Delete</button>
      ) : (
        <button onClick={() => OnCompleted(todo.Text)}>Mark As Completed</button>
      )}</span>
       
       
       
       </div>

            
    </div>
  )
}
