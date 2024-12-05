import { Text, View, TextInput } from 'react-native';
import { styles } from './styles'

export default function Home() {
 return (

    <View style={styles.container}>

    <Text style={styles.eventName}>
      Nome do evento
   </Text>
   
    <Text style={styles.eventDate}>
      Sexta, 4 de Novembro de 2024
    </Text>

    </View>
 )
}