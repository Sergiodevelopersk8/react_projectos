<?php

class Conexion {
    private $servidor = "localhost:3306";
    private $usuario = "root";
    private $contrasena = "root";
    private $base_datos = "tareas";

    public function conectar() {
        try {
            $conexion = new PDO(
                "mysql:host={$this->servidor};dbname={$this->base_datos};charset=utf8",
                $this->usuario,
                $this->contrasena
            );

            $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conexion;
        } catch (PDOException $e) {
            die("Error de conexión: " . $e->getMessage());
        }
    }
}

?>