import { View, Text } from "react-native";
import React from "react";

export default function Login() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
      }}
    >
      <Text style={{ color: "whitesmoke", fontWeight: "bold" }}>Login</Text>
    </View>
  );
}