import { View, Text, StyleSheet } from "react-native";

const NoteItem = ({note}) => {
  return ( 
    <View style={styles.noteItem}>
      <Text>{note.title}</Text>
      <Text style={styles.noteText}>{note.content}</Text>
    </View>
   );
}


const styles = StyleSheet.create({
  noteItem : {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 5
  },
  noteText : {
    fontSize: 16,
    color: '#333'
  },
});
 
export default NoteItem;