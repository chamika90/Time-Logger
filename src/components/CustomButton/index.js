import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const CustomButton = ({
  title,
  onButtonPress,
  customStyle,
  titleStyle,
  isDisabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[
        customStyle ? customStyle : styles.container,
        { opacity: isDisabled ? 0.4 : 1 },
      ]}
      onPress={() => {
        onButtonPress();
      }}
      disabled={isDisabled}
    >
      <Text style={titleStyle ? titleStyle : styles.titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "40%",
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  titleStyle: {
    color: "white",
  },
});

export default CustomButton;
