import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24,
    },
    eventName: {
      color: '#FDFCFE',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48,
    },
    eventDate: {
      color: '#6B6B6B',
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
      backgroundColor: '#1F1E25',
      height: 56,
      borderRadius: 5,
      padding: 16,
      color: '#FFF',
      marginTop: 10,
      flex: 1,
      marginRight: 12
    },
    buttonText: {
      color: '#FFF',
      fontSize: 24,
    },
    button: {
      width: 56,
      height: 56,
      borderRadius: 4,
      backgroundColor: '#31CF67',
      marginTop: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    form: {
      width: '100%',
      flexDirection: 'row',
      marginTop: 36,
      marginRight: 42.
    },
    listEmptyText: {
      color: "#FFF",
      fontSize: 18,
      textAlign: 'center',
      marginTop: 35,
    }
  });
  