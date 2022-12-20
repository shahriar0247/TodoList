import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../globals/colors'

export default function Heading() {
  return (
    <View style={styles.heading_view}>
      <Text style={styles.heading}>TodoList</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    heading_view: {
        margin:15
    },
    heading: {
        fontWeight: "bold",
        fontSize: 30,
        color: colors.accent
    }
})