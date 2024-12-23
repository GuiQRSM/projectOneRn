import { Text, View, TextInput, TouchableOpacity, FlatList, Alert} from 'react-native';
import { styles } from './styles'
import { Participant } from '@/src/components/Participant';

export default function Home() {

  const participants = ['Name1', 'Name2', 'Name3', 'Name4', 'Name5', 'Name6', 'Name7']

  function handleParticipantAdd(){

    if(participants.includes("Name2")) {
      return Alert.alert("Participante já existe", "Inclua um novo participante!")
    }

  }

  function handleParticipantRemove(name: string) {

    Alert.alert("Deletar",`Deseja deletar participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: 'Não'
      }
    ])

  }

 return (

    <View style={styles.container}>

    <Text style={styles.eventName}>
      Nome do evento
   </Text>
   
    <Text style={styles.eventDate}>
      Sexta, 4 de Novembro de 2024
    </Text>
     
     <View style={styles.form}>

     <TextInput style={styles.input}
    placeholder='Nome do participante'
    placeholderTextColor='#6B6B6B'
    />

    <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>

     </View>

    <FlatList
    data={participants}
    keyExtractor={item => item}
    renderItem={({item}) => (
      <Participant
      key={item}
      name={item}
      onRemove={() => handleParticipantRemove(item)}
      />
    )}
    showsVerticalScrollIndicator={false}
    ListEmptyComponent={() => (
      <Text style={styles.listEmptyText}>Adicione pessoas no seu evento!</Text>
    )}
    />
    
    </View>
 )
}