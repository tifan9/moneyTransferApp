import React, { useState } from 'react';
import { View, TextInput, Modal, TouchableOpacity, Text, StyleSheet } from 'react-native';

const MyComponent = () => {
  const [textInputValue, setTextInputValue] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const dropdownItems = ['Item 1', 'Item 2', 'Item 3'];

  const handleDropdownPress = () => {
    setShowDropdown(!showDropdown);
  };

  const handleItemPress = (item) => {
    setSelectedItem(item);
    setShowDropdown(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={textInputValue}
        onChangeText={setTextInputValue}
        placeholder="Enter text"
      />
      <TouchableOpacity style={styles.dropdownButton} onPress={handleDropdownPress}>
        <Text>{selectedItem || 'Select'}</Text>
      </TouchableOpacity>
      <Modal visible={showDropdown} transparent animationType="fade">
        <View style={styles.modalContainer}>
          {dropdownItems.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => handleItemPress(item)}>
              <Text style={styles.dropdownItem}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginTop: 20,
  },
  textInput: {
    flex: 1,
    height: 40,
  },
  dropdownButton: {
    padding: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    textAlign: 'center',
  },
});

export default MyComponent;
