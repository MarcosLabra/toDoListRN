import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Modal, NewItemHeader } from './src/components';

export default function App() {
  const [itemText, setItemText] = useState("");
  const [items, setItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const onChangeText = (text) => {
    setItemText(text);
  };

  const addItemToState = () => {
    const newArr = [...items, { id: Date.now(), value: itemText }];
    setItems(newArr);
    setItemText("");
  };


  return (
    <View style={styles.screenContainer}>
      <NewItemHeader
        onChangeText={onChangeText}
        itemText={itemText}
        addItemToState={addItemToState}
      />
      <Modal
        modalVisible={modalVisible}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#E9F9E6',
  },
});
