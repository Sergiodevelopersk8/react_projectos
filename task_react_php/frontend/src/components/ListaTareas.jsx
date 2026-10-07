// frontend/src/components/ListaTareas.jsx

// Importar React y los hooks useState y useEffect
import { useState, useEffect } from 'react'
// Importar axios para realizar solicitudes HTTP
import axios from 'axios'

import { Link } from 'react-router-dom';


// Componente funcional ListaTareas
export default function ListaTareas() {
 
 const onCompleted = async (id, completado) => {
   try {
     await axios.put(`http://localhost:8000/apiupdate.php?id=${id}`, { completado })
     // Actualizar el estado de las tareas
     setTareas(tareas.map(task => task.id === id ? { ...task, completado } : task))
   } catch (error) {
     console.error('Hubo un error al actualizar la tarea:', error)
   }
 }



 
  // Definir el estado para almacenar las tareas y el estado de carga
  const [tareas, setTareas] = useState([])
  // useState para el estado de carga
  const [cargando, setCargando] = useState(true) 

  // useEffect para obtener las tareas desde la API al montar el componente
  useEffect(() => {
    // Función asíncrona para obtener las tareas desde la API
    const obtenerTareas = async () => {
      try {

        //  URL completa con protocolo HTTP
        const respuesta = await axios.get('http://localhost:8000/api.php')
      // Actualizar el estado de tareas con los datos obtenidos  
        setTareas(respuesta.data)
      
      } catch (error) {
        console.error('Hubo un error al obtener las tareas:', error)
      } 
      // Finalmente, actualizar el estado de carga a false
      finally {
        // Actualizar el estado de carga a false
        setCargando(false)
      }
    }
    // Llamar a la función para obtener las tareas
    obtenerTareas()
  
  // El array vacío [] asegura que el efecto se ejecute solo una vez al montar el componente
  }, [])

  // Mostrar un mensaje de carga mientras se obtienen las tareas
  if (cargando) {
    return <p>Cargando tareas...</p>
  }

  return (
   <div>
    <h2>Lista de Tareas desde MySQL</h2>
    <ul>
   {    // Mapear las tareas y renderizar cada una en un elemento <li>
   tareas.map((task)=>{
    return(
      <li key={task.id}>
        <strong>{task.titulo}</strong> - {task.completado ? 'Completada' : 'Pendiente'} 
           <Link to={`/editar/${task.id}`}
          className='btn btn-warning btn-sm me-3'>Editar</Link>
          <input type='checkbox' checked={task.completado} onChange={(e) => onCompleted(task.id, e.target.checked)} />
      </li>
    )
   })
   
   }
    </ul>
  </div>


































  )
}