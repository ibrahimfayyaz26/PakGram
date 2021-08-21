import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";

import HomeStack from "./HomeStack";
import UserStack from "./UserStack";
import UploadStack from "./UploadStack";
import FavouriteStack from "./FavouriteStack";

const Tab = createBottomTabNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: { backgroundColor: "#7579E7" },
          tabBarActiveTintColor: "#9AB3F5",
          tabBarInactiveTintColor: "#B9FFFC",
        }}
      >
        <Tab.Screen
          name="homeStack"
          component={HomeStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="favouriteStack"
          component={FavouriteStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="heart" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="uploadStack"
          component={UploadStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="arrow-circle-up" color={color} size={30} />
            ),
          }}
        />

        <Tab.Screen
          name="userStack"
          component={UserStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="user" color={color} size={30} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
