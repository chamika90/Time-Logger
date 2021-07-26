import { CommonActions } from "@react-navigation/native";

let navigator;

const setTopLevelNavigator = (navigatorRef) => {
  navigator = navigatorRef;
};

const navigate = (routeName, routeParams) => {
  navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params: routeParams,
    })
  );
};

const back = () => {
  navigator.dispatch(CommonActions.goBack());
};

export default { setTopLevelNavigator, navigate, back };
