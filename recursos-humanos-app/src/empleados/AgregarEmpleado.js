import React,{useState}from 'react' //importamos useState para manejar el estado del formulario
import axios from 'axios';//importamos axios para hacer peticiones HTTP
import { useNavigate } from 'react-router-dom'//importamos useNavigate para redireccionar a otra pagina

export default function AgregarEmpleado() 
{

    let navegacion = useNavigate(); //redirecciona a otra pagina

    //creamos un estado para manejar los datos del formulario
const [empleado, setEmpleado] = useState({
    nombre:"",
    departament:"",
    sueldo:""
})


const {nombre,departamento,sueldo} = empleado; //destructuring para obtener los valores del estado 


//funcion para manejar el cambio de los inputs del formulario
const onInputChange = (e) => {
    //spread operator
    //actualiza el estado del empleado con los valores del formulario
    setEmpleado({...empleado,[e.target.name]:e.target.value})
}

//funcion para manejar el envio del formulario
const onSubmit = async (e) =>{

    e.preventDefault();//evita que se recargue la pagina al enviar el formulario
    const urlBase = "http://localhost:8080/rh-app/empleados"; //url del backend
    await axios.post(urlBase, empleado); //envia los datos del empleado al backend
    navegacion('/');//redirecciona a la pagina principal

}



  return (
    <>
    
    <div className="container">

    <div className="container text-center" style={{margin:"30px"}}>
        <h3>Agregar Empleado</h3>
    </div>

    <form onSubmit={(e)=> onSubmit(e)}>

  <div className="mb-3">
    <label htmlFor="nombre" className="form-label">nombre</label>

    <input type="text" className="form-control" id="nombre" name='nombre' required={true} value={nombre} onChange={(e)=>onInputChange(e)}/>
    
    
  </div>

  <div className="mb-3">
  
    <label htmlFor="departamento" className="form-label">Departamento</label>
  
    <input type="text" className="form-control" id="departamento" name='departamento' value={departamento} onChange={(e)=>onInputChange(e)}/>
  
  </div>
  
<div className="mb-3">
  
    <label htmlFor="sueldo" className="form-label">Sueldo</label>
  
    <input type="number"  setp="any"  className="form-control" id="sueldo" name = 'sueldo' value={sueldo} 
    onChange={(e)=>onInputChange(e)} />
  
  </div>


<div className="text-center">
 
  <button type="submit" className="btn btn-primary btn-sm me-3">Agregar</button>

 <a href='/' className = 'btn btn-danger btn-sm'>Regresar</a> 

</div>
  

</form>



    </div>
    
    
    
    
    
    
    </>
  )
}
