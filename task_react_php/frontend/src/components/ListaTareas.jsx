// frontend/src/components/ListaTareas.jsx

// Importar React y los hooks useState y useEffect
import { useState, useEffect } from 'react'
// Importar axios para realizar solicitudes HTTP
import axios from 'axios'

import { Link } from 'react-router-dom';


// Componente funcional ListaTareas
export default function ListaTareas() {
 
  //const { id } = useParams();
  const urlApi = 'http://localhost:8000/apiupdate.php'

  
  // Definir el estado para almacenar las tareas y el estado de carga
  const [tareas, setTareas] = useState([])
  // useState para el estado de carga
  const [cargando, setCargando] = useState(true) 
  
  const onCompleted = async (e, task) => {


  try {
    const tareaActualizada = {
      id: task.id,
      titulo: task.titulo,
      completado: e.target.checked ? 1 : 0
    }

    await axios.put(urlApi, tareaActualizada)
    
    // Actualización de estado local reactiva
    setTareas(
      tareas.map(t =>
        t.id === task.id ? { ...t, completado: e.target.checked ? 1 : 0 } : t
      )
    )
   

  } catch (error) {
    console.error('Error al actualizar la tarea:', error)
  }
}




 

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
          <input type='checkbox' checked={Boolean(Number(task.completado))} onChange={(e) => onCompleted(e,task)} />
      </li>
    )
   })
   
   }
    </ul>
  </div>


































  )
}