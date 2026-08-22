import React,{useState,useEffect}from 'react' //importamos useState para manejar el estado del formulario
import axios from 'axios' //importamos axios para hacer peticiones HTTP
import { useNavigate,useParams } from 'react-router-dom' //importamos useNavigate para redireccionar a otra pagina

export default function EditarEmpleado() {


const urlBase = "http://localhost:8080/rh-app/empleados"; //url del backend



const {id} = useParams(); //id de los parametros de la url para obtener el empleado a editar

let navegacion = useNavigate(); //navegacion 

let empeladoMod = `${urlBase}/${id}`;

const [empleado, setEmpleado] = useState({
    nombre:"",
    departament:"",
    sueldo:""
})


const {nombre,departamento,sueldo} = empleado

useEffect(()=>{

 cargarEmpleado();  


},[])


const cargarEmpleado = async () => {

    const resultado = await axios.get(empeladoMod)
     setEmpleado(resultado.data);
}






const onInputChange = (e) => {
    //spread operator
    setEmpleado({...empleado,[e.target.name]:e.target.value})
}


const onSubmit = async (e) =>{

    e.preventDefault();
    const urlBase = "http://localhost:8080/rh-app/empleados";
    await axios.put(empeladoMod, empleado);
 
}



  return (
    <>
    
    <div className="container">

    <div className="container text-center" style={{margin:"30px"}}>
        <h3>Editar Empleado</h3>
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
  
    <input type="number"  setp="any"  className="form-control" id="sueldo" name = 'sueldo' value={sueldo} onChange={(e)=>onInputChange(e)} />
  
  </div>


<div className="text-center">
 
  <button type="submit" className="btn btn-primary btn-sm me-3">Guardar</button>

 <a href='/' className = 'btn btn-danger btn-sm'>Regresar</a> 

</div>
  

</form>



    </div>
    
    
    
    
    
    
    </>
  )
}
