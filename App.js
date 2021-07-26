import React from "react";
import { StyleSheet } from "react-native";
import NavigationService from "./src/navigation/NavigationService";
import { NavigationContainer } from "@react-navigation/native";
import Entrypoint from "./src/Entrypoint";

export default function App() {
  return (
    <NavigationContainer
      ref={(navigatorRef) => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    >
      <Entrypoint />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
