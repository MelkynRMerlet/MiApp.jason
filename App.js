import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BadBunny from './BadBunny';
import '@fontsource-variable/roboto-slab';



export default function App() {
  return (
    <View style={styles.contenedorPrincipal}>
      <BadBunny></BadBunny>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedorPrincipal: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto Slab Variable'
    
  },
});
