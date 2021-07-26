import React, { Component } from "react";
import NavigationService from "./NavigationService";
import SwitchNavigator from "./SwitchNavigator";

class AppNavigator extends Component {
  render() {
    return (
      <SwitchNavigator
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}

export default AppNavigator;
