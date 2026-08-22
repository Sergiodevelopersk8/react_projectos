import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function Navegacion() {
  
  // Función simulada para manejar los clics/taps
  const irA = (pantalla: string) => {
    console.log(`Navegando a: ${pantalla}`);
    // Aquí usarías tu enrutador real, ej: navigation.navigate(pantalla)
  };

  return (
    <View style={styles.container}>
      {/* Navbar con fondo azul (bg-primary) */}
      <View style={styles.navbar}>
        
        {/* Brand / Logo */}
        <Pressable onPress={() => irA('Inicio')}>
          <Text style={styles.navbarBrand}>RH</Text>
        </Pressable>

        {/* Contenedor de los enlaces (Menú horizontal) */}
        <View style={styles.navbarNav}>
          
          <Pressable onPress={() => irA('Inicio')} style={styles.navItem}>
            <Text style={[styles.navLink, styles.linkActive]}>Inicio</Text>
          </Pressable>

          <Pressable onPress={() => irA('Agregar')} style={styles.navItem}>
            <Text style={styles.navLink}>Agregar Empleado</Text>
          </Pressable>

        </View>

      </View>
    </View>
  );
}

// Estilos equivalentes a Bootstrap
const styles = StyleSheet.create({
  container: {
    marginTop:50,
    width: '100%',
    paddingHorizontal: 15, // Equivalente a la clase .container de Bootstrap
  },
  navbar: {
    backgroundColor: '#0d6efd', // El color azul de bg-primary de Bootstrap
    flexDirection: 'row',       // Alinea los elementos en fila (horizontal)
    justifyContent: 'space-between', // Separa el título de los botones
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,            // Un pequeño redondeado para que luzca bien
    marginTop: 10,
  },
  navbarBrand: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  navbarNav: {
    flexDirection: 'row',       // Coloca los enlaces uno al lado del otro
  },
  navItem: {
    marginLeft: 15,             // Separación entre los enlaces
  },
  navLink: {
    color: 'rgba(255, 255, 255, 0.55)', // Texto semitransparente para enlaces inactivos
    fontSize: 16,
  },
  linkActive: {
    color: '#ffffff',           // Texto blanco brillante para el enlace activo
    fontWeight: '500',
  },
});