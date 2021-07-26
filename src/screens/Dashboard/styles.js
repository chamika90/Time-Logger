import { StyleSheet } from "react-native";
import { appColors } from "../../config/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B9C4C6",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  timerContainer: {
    backgroundColor: "#9CAAA6",
    borderRadius: 20,
    padding: 10,
    width: "40%",
    margin: 20,
    alignItems: "center",
  },
  timer: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    margin: 10,
    padding: 10,
    alignItems: "center",
  },
  startButton: {
    borderRadius: 20,
    marginRight: 5,
    backgroundColor: appColors.primaryButtonBackgroundColor,
    padding: 10,
    flex: 1,
    alignItems: "center",
  },
  resetButton: {
    borderRadius: 20,
    backgroundColor: appColors.secondaryButtonBackgroundColor,
    padding: 10,
    flex: 1,
    alignItems: "center",
    borderWidth: 1,
    borderColor: appColors.primaryButtonBackgroundColor,
  },
  resetButtonTitle: {
    color: appColors.secondaryButtonTextColor,
    fontWeight: "bold",
  },
  commentContainer: {
    width: "100%",
    flexDirection: "column",
  },
  input: {
    borderRadius: 10,
    backgroundColor: "#F4F4F4",
    margin: 5,
    padding: 10,
  },
  addButtonContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  addButton: {
    borderRadius: 20,
    backgroundColor: appColors.primaryButtonBackgroundColor,
    padding: 10,
    width: "40%",
    alignItems: "center",
  },
});

export default styles;
