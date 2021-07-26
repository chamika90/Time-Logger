import { createStore, compose, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

import rootReducers from "../redux/reducers";

const middleware = [];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = [applyMiddleware(...middleware)];
const persistConfig = { enhancers };
const store = createStore(
  rootReducers,
  undefined,
  composeEnhancer(compose(...enhancers))
);
const persistor = persistStore(store, persistConfig, () => {});
const configureStore = () => {
  return { persistor, store };
};

export default configureStore;
