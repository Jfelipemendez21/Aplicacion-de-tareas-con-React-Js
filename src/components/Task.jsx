import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

// el prop task si se lo tengo que pasar porque el taskList tiene que pasarmelo como prop 
function Task({task}) {

  const { eliminarTarea }= useContext(TaskContext);

  return (
    <div className="tarea">
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button className='btnEliminar' onClick={()=>
         eliminarTarea(task.id)
      }>Eliminar</button>
    </div>
  );
}

export default Task;
