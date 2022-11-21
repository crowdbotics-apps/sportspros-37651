import { Pressable } from "react-native";
import { TextInput } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled1 = ({
  navigation
}) => {
  return <View style={_styles.IeJqThhU}>
      <Pressable onPress={() => navigation.navigate("Untitled2")} style={_styles.uFckDsuG}><View style={_styles.IDBpaDue}></View></Pressable><TextInput style={_styles.EUBfkpRA}></TextInput></View>;
};

export default Untitled1;

const _styles = StyleSheet.create({
  IeJqThhU: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%",
    borderRadius: 0
  },
  IDBpaDue: {
    left: 81,
    top: 303,
    position: "absolute",
    height: 50,
    width: 228,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  EUBfkpRA: {
    left: 58,
    top: 180,
    position: "absolute",
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 241,
    height: 30
  },
  uFckDsuG: {
    position: "unset"
  }
});