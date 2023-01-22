import Task from './Task';
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext'


export function TaskList() {
  
  const {tasks} = useContext(TaskContext);

  if(tasks.length===0){
    return <h1>No se han encontrado tareas</h1>
  }

  return (
    <div className="listaTareas">
        { tasks.map((task)=>(
               <Task key={task.id} task={task}/>
        ))}
    </div>
  );
}