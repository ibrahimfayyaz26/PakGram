import React from "react";
import Navigator from "./navigation/AppNavigator";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Navigator />
    </NativeBaseProvider>
  );
}
