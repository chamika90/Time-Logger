import { StyleSheet } from "react-native";
import { appColors } from "../../config/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 20,
    backgroundColor: appColors.primaryBackgroundColor,
  },
  rowContainer: {
    flexDirection: "row",
  },
  rowTitle: {
    flex: 2,
  },
  rowValue: {
    flex: 3,
    textAlign: "right",
    fontWeight: "bold",
  },
  commentContainer: {
    backgroundColor: appColors.cardBackgroundColor,
    borderRadius: 6,
    padding: 10,
    elevation: 2,
    margin: 5,
  },
  deleteButtonContainer: {
    alignItems: "flex-end",
    right: 0,
    top: 0,
  },
  deleteIcon: {
    tintColor: "red",
  },
  emptyListContainer: {
    flex: 1,
    backgroundColor: appColors.cardBackgroundColor,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
});

export default styles;
