import { useState } from 'react'
import './App.css'
import Task from './Task';

function App() {
  const [taskName, setTask] = useState('');
  const [taskcontainer,setTaskContainer]=useState([]);
  const handleName=(Name)=>
  {
    setTask(Name.trim().toUpperCase());
  }
  const handleClick=()=>
  {
     
      setTaskContainer([...taskcontainer, taskName]);
      console.log(taskcontainer); 
    
  }
  return (
    <>
      <div className="container">
        <p className="title">To Do List</p>
        <div className="taskbar">
          <input type="text" className="task" placeholder="Enter a Task" 
          onChange={(e)=>handleName(e.target.value)} />
        </div>
        <button className="add" onClick={handleClick} >ADD Task</button>
        {
          taskcontainer.map((element,index)=>
          {
            return <Task key={index} taskname={element}/>
          })
        }
      </div>
    </>
  )
}
export default App
