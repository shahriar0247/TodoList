import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import React from "react";
import Button from "../global_components/Button";
import { colors } from "../globals/colors";

export default function ItemAdd({ style }) {
  return (
    <View style={style}>
      <View style={styles.view}>
        <TextInput style={styles.input}></TextInput>
        <Button text="Add" style={styles.add_button}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    borderColor: "#cccccc",
    padding: 5,
    elevation: 2,
    backgroundColor: "white",
    paddingLeft: 15,
    borderBottomColor: colors.accent,
    borderBottomWidth: 2,
    borderColor: colors.primary_dark,
    borderWidth: 1,
    fontSize: 17,
    width: "70%",
  },
  add_button: {
    marginRight: 0,
    marginLeft: "auto",
  },
});
