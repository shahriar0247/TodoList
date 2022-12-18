import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { colors } from "../globals/colors";

export default function Button({ text, style }) {
  return (
    <View style={style}>
      <Pressable style={styles.pressable}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  pressable: {
    padding: 10,
    backgroundColor: colors.accent,
    width: 100,
    minWidth: 100,
    borderRadius: 5,
    elevation: 4,
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
