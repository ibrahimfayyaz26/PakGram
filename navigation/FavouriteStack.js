import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavouriteScreen from "../Screens/Favourite/FavouriteMain";

const Stack = createNativeStackNavigator();

const FavouriteStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ffffff",
        },
      }}
    >
      <Stack.Screen name="favourite" component={FavouriteScreen} />
    </Stack.Navigator>
  );
};

export default FavouriteStack;
