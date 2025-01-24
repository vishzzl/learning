import React, { useState } from 'react'

export default function FormoTodo({OnCreatedClicked}) {
    const[todo,setTodo] = useState("");
    function handleChange(e){
        console.log(e.target.value)
        setTodo(e.target.value);
    }

  return (
    <div>
        <input type="text" value={todo} onChange={handleChange} />
        <button onClick={()=> {OnCreatedClicked(todo);setTodo("");}} >Add</button>
    </div>

  )
}
