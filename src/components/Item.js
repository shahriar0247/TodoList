import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Item({ name, description }) {
  return (
    <View style={styles.item_view}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item_view: {
    marginBottom: 10,
    backgroundColor: "white",
    padding: 10,
    paddingLeft: 20,
    elevation: 5,
    borderRadius: 5,
  },
  name: {
    fontSize: 17,
  },
  description: {
    fontSize: 13,
    color: "#888888",
  },
});
