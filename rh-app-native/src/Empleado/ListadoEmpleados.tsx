import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable, Alert } from 'react-native';
import axios from 'axios';

// Definimos la estructura del empleado (Buena práctica para TypeScript)
interface Empleado {
  idEmpleado: number;
  nombre: string;
  departamento: string;
  sueldo: number;
}

export default function ListadoEmpleados() {
  // Ajusta a '10.0.2.2' si estás usando el emulador de Android Studio
  const urlBase = "http://192.168.1.71:8080/rh-app/empleados"; 

  const [empleados, setEmpleados] = useState<Empleado[]>([]);

  useEffect(() => {
    cargarEmpleados();
  }, []);

  const cargarEmpleados = async () => {
    try {
      const resultado = await axios.get(urlBase);
      setEmpleados(resultado.data);
    } catch (error) {
      console.error("Error al cargar empleados", error);
      Alert.alert("Error", "No se pudieron obtener los empleados");
    }
  };

  const eliminarEmpleado = async (id: number) => {
    // Ventana de confirmación nativa antes de borrar
    Alert.alert(
      "Confirmar eliminación",
      "¿Estás seguro de que deseas eliminar este empleado?",
      [
        { text: "Cancelar", style: "cancel" },
        { 
          text: "Eliminar", 
          style: "destructive",
          onPress: async () => {
            try {
              await axios.delete(`${urlBase}/${id}`);
              Alert.alert("Éxito", "Empleado eliminado");
              cargarEmpleados(); // Recargamos la lista
            } catch (error) {
              Alert.alert("Error", "No se pudo eliminar al empleado");
            }
          }
        }
      ]
    );
  };

  // Función interna para formatear el dinero de forma limpia ($1,500.00)
  const formatearSueldo = (numero: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN'
    }).format(numero);
  };

  // Esta función define cómo se va a ver CADA FILA de empleado
  const renderItem = ({ item }: { item: Empleado }) => (
    <View style={styles.filaCard}>
      <View style={styles.infoContainer}>
        <Text style={styles.empleadoNombre}>{item.nombre}</Text>
        <Text style={styles.empleadoDetalle}>ID: {item.idEmpleado} | {item.departamento}</Text>
        <Text style={styles.empleadoSueldo}>{formatearSueldo(item.sueldo)}</Text>
      </View>

      {/* Botones de Acción */}
      <View style={styles.accionesContainer}>
        <Pressable 
          style={[styles.btn, styles.btnWarning]} 
          onPress={() => console.log(`Editar ID: ${item.idEmpleado}`)}
        >
          <Text style={styles.btnTextOscuro}>Editar</Text>
        </Pressable>

        <Pressable 
          style={[styles.btn, styles.btnDanger]} 
          onPress={() => eliminarEmpleado(item.idEmpleado)}
        >
          <Text style={styles.btnTextBlanco}>Eliminar</Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.tituloHeader}>Sistema de Recursos Humanos</Text>

      {/* FlatList reemplaza a la etiqueta <table> */}
      <FlatList
        data={empleados}
        renderItem={renderItem}
        keyExtractor={(item) => item.idEmpleado.toString()}
        contentContainerStyle={styles.listaContenido}
        ListEmptyComponent={
          <Text style={styles.listaVacia}>No hay empleados registrados.</Text>
        }
      />
    </View>
  );
}

// Estilos móviles limpios
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa', // Fondo gris claro de Bootstrap
    paddingTop: 20,
  },
  tituloHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#212529',
  },
  listaContenido: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  filaCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 12,
    flexDirection: 'row', // Alinea info a la izquierda y botones a la derecha
    justifyContent: 'space-between',
    alignItems: 'center',
    // Sombras para que parezca una tarjeta moderna
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  infoContainer: {
    flex: 1, // Toma todo el espacio disponible de la izquierda
  },
  empleadoNombre: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212529',
  },
  empleadoDetalle: {
    fontSize: 14,
    color: '#6c757d', // Gris muted de Bootstrap
    marginVertical: 2,
  },
  empleadoSueldo: {
    fontSize: 15,
    fontWeight: '600',
    color: '#198754', // Color verde de Bootstrap (success)
  },
  accionesContainer: {
    flexDirection: 'column', // Botones uno arriba del otro en pantallas angostas
    gap: 8, // Espacio entre botones
  },
  btn: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    alignItems: 'center',
    minWidth: 75,
  },
  btnWarning: {
    backgroundColor: '#ffc107', // Amarillo Bootstrap
  },
  btnDanger: {
    backgroundColor: '#dc3545', // Rojo Bootstrap
  },
  btnTextOscuro: {
    color: '#212529',
    fontSize: 13,
    fontWeight: '600',
  },
  btnTextBlanco: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '600',
  },
  listaVacia: {
    textAlign: 'center',
    color: '#6c757d',
    marginTop: 40,
    fontSize: 16,
  }
});