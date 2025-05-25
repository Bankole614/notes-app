import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, TextInput } from "react-native";

const AddNoteModal = ({modalVisible, setModalVisible, noteTitle, setNoteTitle, noteContent, setNoteContent, addNote}) => {
  return ( 
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
                <TouchableOpacity style={styles.saveButton} onPress={addNote}>
                  <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
   );
}


const styles = StyleSheet.create({
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
    backgroundColor: '#ccc'
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
 
export default AddNoteModal;