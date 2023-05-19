import { View, Text } from "react-native";
import "react-native-gesture-handler";
import React from "react";
import AppNavigation from "./navigation/appNavigation";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
