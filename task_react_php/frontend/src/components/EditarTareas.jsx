import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function EditarTareas() {
  const { id } = useParams()
  const urlApi = 'http://localhost:8000/apiupdate.php'

  const [tarea, setTarea] = useState({
    id: '',
    titulo: '',
    completado: 0
  })

  const { titulo } = tarea

  useEffect(() => {
    cargarTarea()
  }, [])

  const cargarTarea = async () => {
    try {
      const resultado = await axios.get(`${urlApi}?id=${id}`)
      setTarea(resultado.data)
    } catch (error) {
      console.error('Error al cargar la tarea:', error)
    }
  }

  const onInputChange = (e) => {
    setTarea({ ...tarea, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      // Enviamos el objeto 'tarea' completo en la petición PUT
      await axios.put(urlApi, tarea)
      alert('Tarea actualizada correctamente')
      window.location.href = '/'
    } catch (error) {
      console.error('Error al actualizar la tarea:', error)
    }
  }

  return (
    <div>
      <h2>Editar Tarea #{id}</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="titulo">Título de la tarea:</label>
          <input
            type="text"
            className="form-control"
            id="titulo"
            name="titulo" // Importante tener el atributo name
            value={titulo}
            onChange={onInputChange}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-sm me-3">
          Guardar Cambios
        </button>
      </form>
    </div>
  )
}