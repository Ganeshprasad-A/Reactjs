import './App.css';
import React from 'react';
export default function Task({taskname})
{
    return(<div className="taskcontainer">
          <p className="taskname">{taskname}</p>
          <div className="buttons">
            <button className="edit">Edit</button>
            <button className="delete">Delete</button>
          </div>
    </div>
    );
}