import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserScreen from "../Screens/User/UserMain";

const Stack = createNativeStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#BDF2D5",
        },
      }}
    >
      <Stack.Screen name="user" component={UserScreen} />
    </Stack.Navigator>
  );
};

export default UserStack;
