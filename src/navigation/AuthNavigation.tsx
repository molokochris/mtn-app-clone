import { View, Text, StatusBar } from "react-native";
import React from "react";
import Login from "../components/Form/Login";
import LoginWifi from "../components/Form/LoginWifi";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function AuthNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar
        barStyle={"light-content"}
        translucent={false}
        backgroundColor={"#FFCB05"}
      />
      {/* <LoginWifi /> */}
      {/* <Login /> */}
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Return-Screen" component={LoginWifi} />
      </Stack.Navigator>
    </>
  );
}
