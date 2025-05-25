import { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, TextInput } from "react-native";

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


  return ( 
    <View style={styles.container}>
      <FlatList 
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <View style={styles.noteItem}>
            <Text>{item.title}</Text>
            <Text style={styles.noteText}>{item.content}</Text>
          </View>
        )} />

        <TouchableOpacity style={styles.addbutton} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>+ Add Note</Text>
        </TouchableOpacity>

        <Modal visible={modalVisible} animationType="slide" transparent onRequestClose={() => setModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Add a new note</Text>
              <TextInput
                style={styles.modalInput}
                placeholder="Title"
                value={noteTitle}
                onChangeText={setNoteTitle}
              />
              <TextInput
                style={styles.modalInput}
                placeholder="Content"
                value={noteContent}
                onChangeText={setNoteContent}
              />
              <View style={styles.modalButtons}>
                <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.saveButton}>
                  <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
    </View>
   );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
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
  modalOverlay : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalContent : {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5
  },
  modalTitle : {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  modalInput : {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  modalButtons : {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  cancelButton : {
    marginRight: 10,
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ccc'
  },
  cancelButtonText : {
    color: '#333'
  },
  saveButton : {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  saveButtonText : {
    color: '#fff'
  }
});
 
export default NoteScreen;