import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/Home/HomeMain";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#BDF2D5",
        },
      }}
    >
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: "PakGram logo",
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
