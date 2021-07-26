import { createStore, compose, applyMiddleware } from "redux";
import { persistStore, persistCombineReducers } from "redux-persist";
//import storage from "redux-persist/es/storage"; // default: localStorage if web, AsyncStorage if react-native

import rootReducers from "../redux/reducers"; // where reducers is a object of reducers

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
