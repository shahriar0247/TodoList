import { View, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Item from "./Item";

export default function ItemList({ item_list, set_item_list }) {




  const item_list_elements = item_list.map(function (item) {
    return <Item key={item.key} key2={item.key} name={item.name} description={item.description} item_list={item_list} set_item_list={set_item_list}></Item>;
  });

  return (
    <ScrollView>
      <View style={styles.item_list}>{item_list_elements}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  item_list: {
    flexDirection: "column",
  },
});
