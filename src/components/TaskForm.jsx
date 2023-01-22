import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import Swal from "sweetalert2";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // aqui estamos usando la funcion tareas del prop values del contexto (TaskContext)
  const { añadirTarea } = useContext(TaskContext);
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        if (title == "" || description == "") {
          return (
            <h1>
              {Swal.fire({
                icon: "error",
                title: "No se ha podido guardar la tarea",
                text: "Algun campo esta vacio",
              })}
            </h1>
          );
        } else {
          añadirTarea(title, description);
          // cuando el furmulario se envie se reinicien los useState
          setTitle("");
          setDescription("");
        }
      }}
    >
      <h1>Administrador de tareas</h1>
      <input
        className="inputTarea"
        placeholder="Escribe el titulo de tu tarea"
        value={title}
        autoFocus
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <textarea
        className="inputDes"
        placeholder="Describe tu tarea"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></textarea>
      <br />
      <button className="guardar">Guardar tarea</button>
    </form>
  );
}

export default TaskForm;
