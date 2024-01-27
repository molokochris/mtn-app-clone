import { View, Text, StatusBar } from "react-native";
import React from "react";
import Login from "../components/Form/Login";
import LoginWifi from "../components/Form/LoginWifi";

export default function AuthNavigation() {
  return (
    <>
      <StatusBar
        barStyle={"light-content"}
        translucent={false}
        backgroundColor={"#FFCB05"}
      />
      <LoginWifi />
      {/* <Login /> */}
    </>
  );
}
