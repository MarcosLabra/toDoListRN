import { StyleSheet, TextInput, View, Button, Dimensions } from "react-native";
import React from "react";

const NewItemHeader = ({
  onChangeText,
  itemText,
  addItemToState
}) => {
  return (
    <View style={styles.addItemInputContainer}>
      <TextInput
        placeholder="Ingrese un item"
        style={styles.input}
        onChangeText={onChangeText}
        value={itemText}
      />
      <Button
        title="Agregar"
        onPress={addItemToState}
        color="#EF7F3F"
      />
    </View>
  );
};

export default NewItemHeader;

const styles = StyleSheet.create({
  addItemInputContainer: {
    width: Dimensions.get('window').width,
    marginTop: 30,
    padding: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: 200,
    color:'#1D300F',
    borderBottomColor: "#1D300F",
    borderBottomWidth: 1,
  },
});
