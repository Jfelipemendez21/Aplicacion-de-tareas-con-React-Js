import { createContext ,useState, useEffect } from 'react';
import {tareas} from '../data/tasks';
// Este objeto createContext es el que crea un nuevo contexto
export const TaskContext = createContext();

// Este es el componente que usa el contexto 
export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState([])
    
  
    function eliminarTarea(idTask){
      setTasks(tasks.filter(task=>task.id !== idTask));
    }
    
  function añadirTarea(titleTarea, descripcionTarea){
    // esto significa literalmente; llama a todos los elementos del array tasks y añadele el nuevo elemento, en este caso la nueva tarea 
    setTasks([...tasks, {
      title: titleTarea,
      id: tasks.length,
      description: descripcionTarea
    }])
  }
  
  useEffect(()=>{
        //cuando cargue el DOM asignele a task el nuevo valor;
      setTasks(tareas);
    },[]);


  return (
    // aqui le creamos un value como prop que tiene dentro un objeto con los parametros 
    <TaskContext.Provider value={{
        tasks,
        añadirTarea,
        eliminarTarea
    }}> {props.children} </TaskContext.Provider>
  );
}
