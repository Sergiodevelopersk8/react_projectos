import { useState, useEffect } from 'react'
import axios from 'axios'

export default function ListaTareas() {
  const [tareas, setTareas] = useState([])
  const [cargando, setCargando] = useState(true) // Corrección: useState

  useEffect(() => {
    const obtenerTareas = async () => {
      try {
        // Corrección: URL completa con protocolo HTTP
        const respuesta = await axios.get('http://localhost:8000/api.php')
        console.log(respuesta.data)
        setTareas(respuesta.data)
      } catch (error) {
        console.error('Hubo un error al obtener las tareas:', error)
      } finally {
        setCargando(false)
      }
    }

    obtenerTareas()
  }, [])

  if (cargando) {
    return <p>Cargando tareas...</p>
  }

  return (
   <div>
    <h2>Lista de Tareas desde MySQL</h2>
    <ul>
      {tareas.map(task => (
        <li key={task.id}>
          {task.titulo} — {task.completado ? 'Completada' : ' Pendiente'}
        </li>
      ))}
    </ul>
  </div>




  )
}