import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from '@redux-devtools/extension';
import RootReducer from "./reducers/RootReducer.js";

const configureStore = (persistedState) => {
  const store = createStore(
    RootReducer,
    persistedState,
    composeWithDevTools(
        applyMiddleware(thunkMiddleware)
    )
  );
  return store;
};

export default configureStore;
