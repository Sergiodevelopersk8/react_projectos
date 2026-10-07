<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once __DIR__ . '/db/conexion.php';

try {
    $db = new Conexion();
    $pdo = $db->conectar();

    // 1. OBTENER UNA TAREA POR ID (GET)
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        if (isset($_GET['id'])) {
            $id = $_GET['id'];
            $stmt = $pdo->prepare("SELECT id, titulo, completado FROM tarea WHERE id = :id");
            $stmt->execute(['id' => $id]);
            $tarea = $stmt->fetch();

            if ($tarea) {
                echo json_encode($tarea);
            } else {
                http_response_code(404);
                echo json_encode(["mensaje" => "Tarea no encontrada"]);
            }
        } else {
            http_response_code(400);
            echo json_encode(["mensaje" => "Falta el parámetro ID"]);
        }
    }

    // 2. ACTUALIZAR TAREA (PUT)
    if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
        // En peticiones PUT, los datos JSON vienen en php://input
        $datos = json_decode(file_get_contents('php://input'), true);

        if (isset($datos['id']) && isset($datos['titulo'])) {
            $id = $datos['id'];
            $titulo = $datos['titulo'];
            $completado = isset($datos['completado']) ? $datos['completado'] : 0;

            $stmt = $pdo->prepare("UPDATE tarea SET titulo = :titulo, completado = :completado WHERE id = :id");
            $resultado = $stmt->execute([
                'id' => $id,
                'titulo' => $titulo,
                'completado' => $completado
            ]);

            echo json_encode(["mensaje" => "Tarea actualizada con éxito"]);
        } else {
            http_response_code(400);
            echo json_encode(["mensaje" => "Datos incompletos"]);
        }
    }

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Error de servidor: " . $e->getMessage()]);
}





?>