import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <Text className="text-4xl text-red-500">Navbar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 0,
  },
});
