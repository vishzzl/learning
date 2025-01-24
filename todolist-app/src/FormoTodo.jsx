import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createTodo } from './todoslice';


export default function FormoTodo({OnCreatedClicked}) {
    const[todo,setTodo] = useState("");
    const dispatch = useDispatch();
    function handleChange(e){
        console.log(e.target.value)
        setTodo(e.target.value);
    }

  return (
    <div>
        <input type="text" value={todo} onChange={handleChange} />
        <button onClick={()=> dispatch(createTodo(todo),setTodo(''))} >Add</button>
    </div>

  )
}
