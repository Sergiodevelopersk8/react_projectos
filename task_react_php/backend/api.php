<?php 

require_once __DIR__ . '/db/conexion.php';


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");


try{

 
// Manejo de petición preflight (OPTIONS) que hace Axios/Fetch
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}




if ($_SERVER['REQUEST_METHOD'] === 'GET') {
 
// Instanciar la clase Conexion y conectar
        $db = new Conexion();
        $pdo = $db->conectar();

// Preparar y ejecutar la consulta SELECT
        $query = "SELECT id, titulo, completado, fecha_creacion FROM tarea";
        $stmt = $pdo->prepare($query);
        $stmt->execute();

        // obtener resultados
        $tareas = $stmt->fetchAll();

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