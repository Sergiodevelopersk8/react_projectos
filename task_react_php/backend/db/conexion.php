<?php

class Conexion {
    private $servidor = "localhost:3306";
    private $usuario = "root";
    private $contrasena = "root";
    private $base_datos = "tareas";

    public function conectar() {
        try {
            // Crear una nueva conexión PDO
            $conexion = new PDO(
                // Configurar la conexión con el servidor, base de datos y conjunto de caracteres
                "mysql:host={$this->servidor};dbname={$this->base_datos};charset=utf8",
                // Proporcionar el nombre de usuario y la contraseña para la conexión
                $this->usuario,
                $this->contrasena
            );

            // Configurar el modo de error de PDO para lanzar excepciones en caso de errores
            $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            // Devolver la conexión PDO establecida
            return $conexion;
        }
        // Capturar cualquier excepción de PDO y mostrar un mensaje de error 
        catch (PDOException $e) {
            die("Error de conexión: " . $e->getMessage());
        }
    }
}

?>