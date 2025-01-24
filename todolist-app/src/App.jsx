import { useState } from 'react'

import './App.css'
import Todolist from './Todolist'

function App() {
  const [CompletedTodos, setCompletedTodos] = useState([
    { Text: "Turn off the geyser", isCompleted: true },
    { Text: "Check the lights", isCompleted: true },
    { Text: "Submit the assignment", isCompleted: true },
  ]);

  const [InCompletedTodos, setInCompletedTodos] = useState([
    { Text: "Turn on the geyser", isCompleted: false },
    { Text: "Check the TV", isCompleted: false },
    { Text: "Complete the homework", isCompleted: false },
  ]);


function Completed(Text){
setInCompletedTodos(InCompletedTodos.filter(t=>t.Text !== Text));
setCompletedTodos([...CompletedTodos,{...InCompletedTodos.find(t=>t.Text === Text),isCompleted:true}])
}
function Deleted(Text){
  setCompletedTodos(CompletedTodos.filter(t=>t.Text !== Text));
}
function created(Text){
  console.log(Text)
  
  setInCompletedTodos([...InCompletedTodos,{Text,isCompleted:false}]);
}

  return (
    <>
     <Todolist 
     OnCreatedClicked={created}
     onCompleteClicked={Completed}
     onDeletedClicked={Deleted}
     CompletedTodos={CompletedTodos} 
     IncompleteTodos={InCompletedTodos} />
    </>
  )
}

export default App
