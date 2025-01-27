import { useEffect, useState } from 'react'

import './App.css'
import Todolist from './Todolist'
import { getTodoItems } from './api/todoaApi';

console.log("hi");
const TodoList = () =>{
  const [todos, setTodos] = useState([]);
  useEffect(()=>{
    fetchTodos();
  },[]);
  const fetchTodos = async ()=>{
    try {
      const data = await getTodoItems();
console.log(data);
setTodos(data);
    } catch (error) {
      console.error('error',error);
    }
  }  }
function App() {
  const [todos, setTodos] = useState([]);
 

  // Fetch todos from API
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const data = await getTodoItems();
        console.log("Fetched todos:", data);
        // Split into completed/incomplete based on API data
        setCompletedTodos(data.filter(todo => todo.isCompleted));
        setIncompleteTodos(data.filter(todo => !todo.isCompleted));
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };
    fetchTodos();
  }, []);
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
