import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles'
import { Participant } from '@/src/components/Participant';

export default function Home() {

  const participants = ['Name1', 'Name2', 'Name3', 'Name4', 'Name5', 'Name6', 'Name7']

  function handleParticipantAdd(){
    console.log("Clicado!")
  }

  function handleParticipantRemove() {
    console.log("Clicado em remover!")
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

    <ScrollView showsVerticalScrollIndicator={false}>
    {
      participants.map(participants => (
        <Participant
        key={participants}
        name={participants}
        onRemove={handleParticipantRemove}
        />
      ))
    }
    </ScrollView>
    
    </View>
 )
}