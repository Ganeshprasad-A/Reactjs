import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p className="nzme">ganesh</p> */}
      <div className="container">
        <p className="title">To Do List</p>
        <div className="taskbar">
          <input type="text" className="task" placeholder="Enter a Task" />
        </div>
        <button className="add" onclick="addtask()">ADD Task</button>
        <div className="taskcontainer">
          <p className="taskname">Task1</p>
          <div className="buttons">
            <button className="edit">Edit</button>
            <button className="delete">Delete</button>
          </div>
        </div>
        <div className="taskcontainer">
          <p className="taskname">Task2</p>       
          <div className="buttons">
            <button className="edit">Edit</button>
            <button className="delete">Delete</button>
          </div>
        </div>
        <div className="taskcontainer">
          <p className="taskname">Task3</p>
          <div className="buttons">
            <button className="edit">Edit</button>
            <button className="delete">Delete</button>
          </div>
        </div>
        <div className="taskcontainer">
          <p className="taskname">Task4</p>
          <div className="buttons">
            <button className="edit">Edit</button>
            <button className="delete">Delete</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default App
