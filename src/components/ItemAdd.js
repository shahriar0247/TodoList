import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import Button from "../global_components/Button";
import { colors } from "../globals/colors";

export default function ItemAdd({ style, item_list, set_item_list }) {
  const [input_value, set_input_value] = useState()

  function add_item() {

    if (input_value == "") return


    let key = '_' + Math.random().toString(36).substr(2, 9)

    set_item_list([
      ...item_list,
      {
        key: key,
        name: input_value,
        description: "task",
      },

    ])
    set_input_value("")
  }



  return (
    <View style={style}>
      <View style={styles.view}>
        <TextInput style={styles.input} value={input_value} onChangeText={set_input_value}></TextInput>
        <Button text="Add" style={styles.add_button} onClick={add_item}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
  },
  input: {
    borderColor: "#cccccc",
    padding: 7,
    elevation: 2,
    backgroundColor: "white",
    paddingLeft: 15,
    borderBottomColor: colors.accent,
    borderBottomWidth: 2,
    borderColor: colors.primary_dark,
    borderWidth: 1,
    fontSize: 17,
    alignSelf: "flex-start",
    width: "65%"
  },
  add_button: {
    marginRight: 0,
    marginLeft: "auto",
  },
});
