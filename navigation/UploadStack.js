import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UploadScreen from "../Screens/Upload/UploadMain";

const Stack = createNativeStackNavigator();

const UploadStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#BDF2D5",
        },
      }}
    >
      <Stack.Screen name="Upload" component={UploadScreen} />
    </Stack.Navigator>
  );
};

export default UploadStack;
