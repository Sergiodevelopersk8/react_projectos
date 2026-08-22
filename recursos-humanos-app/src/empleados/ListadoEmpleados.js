import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { NumericFormat } from 'react-number-format';
import { Link, useNavigate, useParams } from 'react-router-dom';



export default function ListadoEmpleados() {


    const urlBase = "http://localhost:8080/rh-app/empleados";
    

    let navegacion  = useNavigate();

  


    const [empleados,setEmpleados] = useState([]);

    useEffect(() => {

        cargarEmpleados();



    },[]);


    const eliminarEmpleado = async (id) =>{
      await axios.delete(`${urlBase}/${id}`);
      cargarEmpleados();
    }


    const cargarEmpleados = async () => {

        const resultado = await axios.get(urlBase);
        console.log("resultado de cargar empleados");
        console.log(resultado.data)
        setEmpleados(resultado.data)

    }




  return (
    <>
    
    <div className="container">
    <div className="container text-center" style={{margin:"30px"}}>
    <h3>Sistema de recursos Humanos</h3>

    </div>


<table className="table table-striped table-hover aling-middle">
  <thead className="table-dark">
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Empleado</th>
      <th scope="col">Departamento</th>
      <th scope="col">Sueldo</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {
//iteramos el arreglo de empleados

    empleados.map((empleado,indice) => (

    <tr key={indice}>
      <th scope="row">{empleado.idEmpleado}</th>
      <td>{empleado.nombre}</td>
      <td>{empleado.departamento}</td>
      <td> <NumericFormat value = {empleado.sueldo}
       displayType={'text'} thousandSeparator=',' 
       prefix={'$'} decimalScale={2} 
       fixedDecimalScale/> </td>

      <td className="text-center">
        <div>
          <Link to={`/editar/${empleado.idEmpleado}`}
          className='btn btn-warning btn-sm me-3'>Editar</Link>
                    <button className="btn btn-danger btn-sm me-3" onClick={()=>eliminarEmpleado(empleado.idEmpleado)}>Eliminar</button>
        </div>
      </td>


    </tr>


    ))


     
    }
   
  
  </tbody>
</table>




    </div>
    
    
    
    
    
    </>
  )
}
