import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput } from "react-native";
import NoteList from "../../components/NoteList";
import AddNoteModal from "../../components/AddNoteModal";

const NoteScreen = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Note 1',
      content: 'Content of note 1'
    },
    {
      id: 2,
      title: 'Note 2',
      content: 'Content of note 2'
    },
    {
      id: 3,
      title: 'Note 3',
      content: 'Content of note 3'
    }
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');

  const addNote = () => {
    if (noteTitle.trim() === '' && noteContent.trim() === '') return;

    setNotes( (prevNotes) => [...prevNotes, {id: Date.now.toString(), title: noteTitle, content: noteContent}]);
    
    setNoteTitle('');
    setNoteContent('');
    setModalVisible(false);
  };


  return ( 
    <View style={styles.container}>
      <NoteList notes={notes} />

        <TouchableOpacity style={styles.addbutton} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>+ Add Note</Text>
        </TouchableOpacity>

      <AddNoteModal modalVisible={modalVisible} setModalVisible={setModalVisible} noteTitle={noteTitle} setNoteTitle={setNoteTitle} noteContent={noteContent} setNoteContent={setNoteContent} addNote={addNote} />

        
    </View>
   );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  
  addbutton : {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText : {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
 
});
 
export default NoteScreen;