import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import ItemList from "./components/ItemList";
import Heading from "./components/Heading";
import ItemAdd from "./components/ItemAdd";
import { colors } from "./globals/colors";

export default function TodoList() {
  const [item_list, set_item_list] = useState([
   
  ]);

  return (
    <View style={styles.container}>
      <Heading></Heading>
      <ItemList item_list={item_list} set_item_list={set_item_list}></ItemList>
      <ItemAdd style={styles.item_add} item_list={item_list} set_item_list={set_item_list}></ItemAdd>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 30,
    paddingBottom: 40,
    backgroundColor: colors.primary_light,
    minHeight: "100%",
  },
  item_add: {
    marginBottom: 0,
    marginTop: "auto",
  },
});
