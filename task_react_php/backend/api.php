<?php 

require_once __DIR__ . '/db/conexion.php';


// Permitir solicitudes desde cualquier origen
header("Access-Control-Allow-Origin: *");
// Permitir métodos HTTP específicos
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
// Permitir métodos HTTP específicos
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
// Establecer el tipo de contenido de la respuesta como JSON
header("Content-Type: application/json; charset=UTF-8");


try{

 
// Manejo de petición preflight (OPTIONS) que hace Axios/Fetch
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
   
// Responder con un código de estado 200 OK para indicar que la solicitud es válida        
http_response_code(200);
// Salir del script para evitar procesar la solicitud OPTIONS
    exit();
}



// Manejar la solicitud GET para obtener todas las tareas
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
 
// Instanciar la clase Conexion y conectar
        $db = new Conexion();
        // Obtener la conexión PDO
        $pdo = $db->conectar();

// Preparar y ejecutar la consulta SELECT
        $query = "SELECT id, titulo, completado, fecha_creacion FROM tarea";
        // Preparar la consulta
        $stmt = $pdo->prepare($query);
        // Ejecutar la consulta
        $stmt->execute();

        // obtener resultados
        $tareas = $stmt->fetchAll();
        // Devolver los resultados como JSON
        echo json_encode($tareas);

    
}else {
    http_response_code(405);
    echo "Method not allowed";
}

}  catch(PDOException $error){

http_response_code(500);
        echo json_encode(["error" => "Error al obtener las tareas: " . $error->getMessage()]);

}



?>