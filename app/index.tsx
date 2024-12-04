import { Text, View, StyleSheet } from 'react-native';

export default function App() {
 return (
  
    <View style={styles.container}>

    <Text style={{
      color: '#FDFCFE',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48,
    }}>
      Nome do evento
   </Text>
   
    <Text style={{
      color: '#6B6B6B',
      fontSize: 16,
      fontWeight: 'bold',
    }}>Sexta, 4 de Novembro de 2024</Text>

    </View>
 )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  }
});