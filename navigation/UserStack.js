import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserScreen from "../Screens/User/UserMain";

const Stack = createNativeStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#7579E7",
        },
      }}
    >
      <Stack.Screen name="user" component={UserScreen} />
    </Stack.Navigator>
  );
};

export default UserStack;
