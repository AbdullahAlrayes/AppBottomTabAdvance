import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from "./Component/Home";
import SettingScreen from "./Component/Settings";

export default class App extends React.Component {
  render() {
    return <AppTabNavigator />;
  }
}

const AppTabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" color={tintColor} size={24} />
        )
      }
    },
    Setting: {
      screen: SettingScreen,
      navigationOptions: {
        tabBarLabel: "Settings",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-settings" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    shifting: true,
    activeTintColor: "orange",
    inactiveTintColor: "grey",
    barStyle: { backgroundColor: "#fff" }
  }
);
