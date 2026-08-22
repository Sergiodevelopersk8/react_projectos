import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
import axios from 'axios';

export default function AgregarEmpleado() {
  // Estado del empleado (Corregido 'departament' por 'departamento')
  const [empleado, setEmpleado] = useState({
    nombre: "",
    departamento: "",
    sueldo: ""
  });

  const { nombre, departamento, sueldo } = empleado;

  // En React Native recibimos directamente el valor y le pasamos el nombre del campo manualmente
  const onInputChange = (fieldName: string, value: string) => {
    setEmpleado({ ...empleado, [fieldName]: value });
  };

  const onSubmit = async () => {
    // Validación manual rápida (ya que no tenemos el 'required' del HTML)
    if (!nombre.trim() || !departamento.trim() || !sueldo.trim()) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    // REEMPLAZA CON LA IP DE TU PC (Ej: 192.168.1.50) o '10.0.2.2' si usas emulador de Android
    const urlBase = "http://192.168.1.71:8080/rh-app/empleados"; 
    
    try {
      await axios.post(urlBase, empleado);
      Alert.alert("Éxito", "Empleado agregado correctamente");
      
      // Aquí harías tu navegación de regreso, ej: navigation.goBack() o router.back()
      console.log("Redirigiendo al Inicio...");
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "No se pudo conectar con el servidor");
    }
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.titulo}>Agregar Empleado</Text>
      </View>

      {/* Campo: Nombre */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Nombre</Text>
        <TextInput 
          style={styles.input}
          value={nombre}
          onChangeText={(value) => onInputChange('nombre', value)}
          placeholder="Ej. Juan Pérez"
        />
      </View>

      {/* Campo: Departamento */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Departamento</Text>
        <TextInput 
          style={styles.input}
          value={departamento}
          onChangeText={(value) => onInputChange('departamento', value)}
          placeholder="Ej. Recursos Humanos"
        />
      </View>

      {/* Campo: Sueldo */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Sueldo</Text>
        <TextInput 
          style={styles.input}
          value={sueldo}
          onChangeText={(value) => onInputChange('sueldo', value)}
          placeholder="Ej. 1500"
          keyboardType="numeric" // Abre el teclado numérico en el celular
        />
      </View>

      {/* Botones de acción */}
      <View style={styles.buttonContainer}>
        <Pressable style={[styles.btn, styles.btnPrimary]} onPress={onSubmit}>
          <Text style={styles.btnText}>Agregar</Text>
        </Pressable>

        <Pressable style={[styles.btn, styles.btnDanger]} onPress={() => console.log('Regresar')}>
          <Text style={styles.btnText}>Regresar</Text>
        </Pressable>
      </View>

    </View>
  );
}

// Estilos simulando Bootstrap
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    marginVertical: 30,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212529',
  },
  formGroup: {
    marginBottom: 15, // Equivalente a mb-3
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#212529',
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ced4da', // Color gris de Bootstrap
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginHorizontal: 10,
    elevation: 2, // Sombra ligera en Android
  },
  btnPrimary: {
    backgroundColor: '#0d6efd',
  },
  btnDanger: {
    backgroundColor: '#dc3545',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});