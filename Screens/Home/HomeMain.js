import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HomeMain = () => {
  return (
    <View style={styles.main}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#A3D8F4",
    justifyContent: "center",
  },
});

export default HomeMain;
