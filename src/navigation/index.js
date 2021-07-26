import React, { Component } from "react";
// using netinfo from rn here since the community module is causing an error
// import NetInfo from "@react-native-community/netinfo";
import NavigationService from "./NavigationService";
import SwitchNavigator from "./SwitchNavigator";

class AppNavigator extends Component {
  //   componentDidMount() {
  //     NetInfo.addEventListener("connectionChange", this.handleConnectivityChange);
  //     NetInfo.isConnected.addEventListener(
  //       "connectionChange",
  //       this.handleConnectivityIsConnectChange
  //     );

  //     handleAndroidBackButton(() => {
  //       const route = NavigationService.getCurrentRoute();
  //       console.log(route);
  //       if (route) {
  //         if (
  //           route.routeName == "NewSaleHome" ||
  //           route.routeName == "RetailerProfile" ||
  //           route.routeName == "SaleDetails" ||
  //           route.routeName == "AddRetailer" ||
  //           route.routeName == "PrinterSetup" ||
  //           route.routeName == "ChangePassword" ||
  //           route.routeName == "FailedTransactionView"
  //         ) {
  //           return false;
  //         }
  //       }

  //       if (this.props.authStatus != Constants.authStatus.USER_UNDEFINED) {
  //         const onConfirm = () => {
  //           try {
  //             this.props.resetStore();
  //             this.props.showLoader("Logging out user");
  //             setTimeout(() => {
  //               NavigationService.navigate("Auth");
  //               this.props.hideLoader();
  //             }, 2000);
  //           } catch (error) {}
  //         };

  //         const onReject = () => {
  //           this.props.hideConfirmationModal();
  //         };
  //         var data = {
  //           message: "This will log you out from the system, please confirm!",
  //           onConfirm: onConfirm,
  //           onReject: onReject
  //         };

  //         this.props.showConfirmationModal(data);
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     });
  //   }

  //   componentWillUnmount() {
  //     removeAndroidBackButtonHandler();
  //     NetInfo.isConnected.removeEventListener(
  //       "connectionChange",
  //       this.handleConnectivityIsConnectChange
  //     );
  //     NetInfo.removeEventListener(
  //       "connectionChange",
  //       this.handleConnectivityChange
  //     );
  //   }

  //   handleConnectivityChange = connectionInfo => {
  //     console.log("Connection Info", connectionInfo);
  //     if (connectionInfo.type == "cellular") {
  //       switch (connectionInfo.effectiveType) {
  //         case "2g":
  //           this.props.updateConnectivityStrength(
  //             Constants.connectivityStrength.low
  //           );
  //           break;
  //         case "3g":
  //           this.props.updateConnectivityStrength(
  //             Constants.connectivityStrength.average
  //           );
  //           break;
  //         case "4g":
  //           this.props.updateConnectivityStrength(
  //             Constants.connectivityStrength.high
  //           );
  //           break;
  //         default:
  //           break;
  //       }
  //     } else if (connectionInfo.type == "wifi") {
  //       this.props.updateConnectivityStrength(
  //         Constants.connectivityStrength.average
  //       );
  //     } else {
  //       this.props.updateConnectivityStrength(
  //         Constants.connectivityStrength.average
  //       );
  //     }
  //   };

  //   handleConnectivityIsConnectChange = isConnected => {
  //     console.log("Connection changed ", isConnected);
  //     if (isConnected) {
  //       this.props.updateConnectivityStatus(true);
  //     } else {
  //       this.props.updateConnectivityStatus(false);
  //     }
  //   };

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
