//Redux File Store to get Reducer Functions and configure and supply
import { configureStore } from "@reduxjs/toolkit";
import CartOpsReducer from "./reducers/CartOpsReducer";

//Middleware function to store the ReduxStore to Local storage
const storeToLocal = (props) => {
  return (next) => {
    return (action) => {
      const result = next(action);
      localStorage.setItem("redux_store", JSON.stringify(props.getState()));
      return result;
    };
  };
};

//Function to call in preloadedState
const localStorageRetrieve = () => {
  if (localStorage.getItem("redux_store") !== null) {
    return JSON.parse(localStorage.getItem("redux_store"));
  }
};

const ReduxStore = configureStore({
  reducer: {
    CartOpsReducer,
  },
  devTools: true,
  middleware: (defaultMiddleware) => {
    return [...defaultMiddleware(), storeToLocal];
  },
  preloadedState: localStorageRetrieve(),
});

export default ReduxStore;
