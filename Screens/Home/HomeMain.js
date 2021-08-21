import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Input, Icon, Avatar, HStack } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const HomeMain = () => {
  const urlData = [
    "https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg",
    "https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg",
    "https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg",
    "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg",
    "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg",
    "a",
    "a",
    "b",
  ];

  return (
    <View style={styles.main}>
      <View style={styles.search}>
        <Input
          placeholder="Search"
          variant="filled"
          width="100%"
          bg="white"
          borderRadius={15}
          py={2}
          px={3}
          color="green"
          InputLeftElement={
            <Icon
              size="sm"
              ml={3}
              size={6}
              color="green"
              as={<Ionicons name="ios-search" />}
            />
          }
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <ScrollView horizontal={true}>
          {urlData.map((it) => {
            return (
              <View style={{ marginHorizontal: 5 }}>
                <Avatar
                  key={Math.random * Math.random}
                  size="xl"
                  source={{
                    uri: it,
                  }}
                >
                  name
                </Avatar>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#EFFFFB",
  },
  search: {
    width: "96%",
    marginTop: 10,
  },
});

export default HomeMain;
