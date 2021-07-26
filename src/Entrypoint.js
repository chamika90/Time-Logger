import React from "react";
import { Provider } from "react-redux";

import configureStore from "./store/configureStore";
import { RootStackScreen } from "./navigation/NavigationStack";

const { store } = configureStore();

const Entrypoint = () => {
  return (
    <Provider store={store}>
      <RootStackScreen />
    </Provider>
  );
};

export default Entrypoint;
