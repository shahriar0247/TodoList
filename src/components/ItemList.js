import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Item from "./Item";

export default function ItemList({ item_list }) {
  const item_list_elements = item_list.map(function (item) {
    return <Item key={item.name} name={item.name} description={item.description}></Item>;
  });

  return (
    <View>
      <View style={styles.item_list}>{item_list_elements}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  item_list:{
    flexDirection: "column",
  }
})
