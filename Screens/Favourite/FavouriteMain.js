import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FavouriteMain = () => {
  return (
    <View style={styles.main}>
      <Text>Favourite</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EFFFFB",
  },
});

export default FavouriteMain;
