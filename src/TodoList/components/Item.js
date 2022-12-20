import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Button from "../global_components/Button";



export default function Item({ key2, name, description, remove_item, item_list, set_item_list }) {


  function remove_item() {

    let array = [...item_list];
    array.forEach((item, index) => {
      if (item['key'] == key2) {
        array.splice(index, 1);
        set_item_list(array)
      }
    })

  }



  return (
    <View style={styles.item_view}>
      <View style={styles.text_container}>

        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.button_container}>
        <Button text='Delete' onPress={remove_item}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item_view: {
    marginBottom: 10,
    backgroundColor: "white",
    padding: 10,
    margin: 5,
    paddingLeft: 20,
    elevation: 5,
    borderRadius: 5,
    flexDirection: "row"
  },
  text_container: {},
  button_container: {
    marginRight: 0,
    marginLeft: "auto"
  },
  name: {
    fontSize: 17,
  },
  description: {
    fontSize: 13,
    color: "#888888",
  },
});
