import React from "react";

import Dashboard from "../../screens/Dashboard";
import { appColors } from "../../config/Colors";
import Comments from "../../screens/Comments";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

// const tabsList = [
//   {
//     key: "Dashboard",
//     title: "Home",
//     screen: Dashboard,
//     //icon: Images.ic_home,
//   },
//   {
//     key: "Comments",
//     title: "Comments",
//     screen: Comments,
//     //icon: Images.ic_sales_tab,
//   },
// ];

// const _renderTabs = () => {
//   return tabsList.reduce((routes, tab) => {
//     routes[tab["key"]] = _renderTab(tab);
//     return routes;
//   }, {});
// };

// const _renderTab = (tab) => {
//   return {
//     screen: tab.screen,
//     navigationOptions: ({ navigation }) => {
//       return {
//         tabBarColor: "#ffffff",
//         tabBarLabel: tab.title,
//         labelStyle: { marginTop: 1 },
//         // tabBarIcon: ({ tintColor, focused }) => (
//         //   <Image
//         //     style={{
//         //       width: 26,
//         //       height: 26,
//         //       tintColor: tintColor,
//         //       padding: 12,
//         //     }}
//         //     source={(image = tab.icon)}
//         //   />
//         // ),
//       };
//     },
//   };
// };

// const RenterTabs = _renderTabs;

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    // <NavigationContainer>
    <Tab.Navigator initialRouteName="Dashboard">
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen
        name="Comments"
        unmountOnBlur={true}
        component={Comments}
        options={{ unmountOnBlur: true }}
      />
      {/* <Tab.Screen name="Tab3" component={Tab3} />
        <Tab.Screen name="Tab4" component={Tab4} /> */}
    </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default TabNavigator;
