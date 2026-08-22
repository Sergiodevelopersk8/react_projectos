import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Navegacion from './src/plantilla/Navegacion';
import ListadoEmpleados from './src/Empleado/ListadoEmpleados';

export default function App() {
  return (
    <View style={styles.container}>
      <Navegacion/>
<ListadoEmpleados/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
