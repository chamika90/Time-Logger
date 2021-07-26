import * as React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//import Home from "./BottomTabNavigator";
import Dashboard from "../screens/Dashboard";
import Comments from "../screens/Comments";
import Images from "../assets/images";

const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TabScreens = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      tabBarOptions={{
        activeTintColor: "purple",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={Images.ic_home}
              tintColor={focused ? "purple" : "gray"}
              size={10}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Comments"
        component={Comments}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={Images.ic_comments}
              tintColor={focused ? "purple" : "gray"}
              size={10}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const RootStackScreen = () => {
  return (
    <RootStack.Navigator name="root">
      <RootStack.Screen
        options={{
          headerShown: false,
        }}
        name="home"
        component={TabScreens}
      />
    </RootStack.Navigator>
  );
};

export { RootStackScreen };
