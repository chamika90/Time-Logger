import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabNavigator from "./Content";
import { appColors } from "../../config/Colors";

export default createBottomTabNavigator(TabNavigator(), {
  shifting: false,
  initialRouteName: "Dashboard",
  activeColor: appColors.bottomNavigationTextActiveColor,
  inactiveColor: appColors.bottomNavigationTextInactiveColor,
  barStyle: {
    backgroundColor: appColors.bottomNavigationBackgroundColor,
  },
});
