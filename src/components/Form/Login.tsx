import { View, Text, Pressable } from "react-native";
import React from "react";

export default function Login({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: "#FFCB05",
      }}
    >
      <View
        style={{
          paddingHorizontal: 36,
          paddingVertical: 16,
          backgroundColor: "white",
          flexDirection: "row",
          // elevation: 4,
          // shadowColor: "black",
        }}
      >
        <View
          style={{
            // paddingVertical: 2,
            // paddingHorizontal: 14,
            width: 60,
            height: 30,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 2,
            borderRadius: 22,
          }}
        >
          <Text
            style={{
              // fontWeight: "900",
              fontSize: 16,
              fontFamily: "Poppins-Bold",
            }}
          >
            MLN
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 300,
            height: 300,
            backgroundColor: "rgba(255,255,255,.4)",
            marginBottom: 20,
            padding: 10,
            borderRadius: 8,
            // flexWrap: "wrap",
            flexDirection: "column",
          }}
        >
          <Text style={{ fontFamily: "Poppins-Bold" }}>
            Welcome to your MLN App.
          </Text>
          <Text>
            Manage your full MLN experience where ever you are. From exclusive
            deals to instant recharging, enjoy convinience, control and ease on
            SA's best network.
          </Text>
        </View>
        <Pressable
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 8,
            // backgroundColor: "#FFCB05",
            backgroundColor: "#FFCB95",
          }}
          onPress={() => navigation.navigate("Return-Screen")}
        >
          <Text style={{ fontFamily: "Poppins-Regular" }}>Continue</Text>
        </Pressable>
        <Text style={{}}>
          By confirming, you agree to the{" "}
          <Text
            style={{ textDecorationLine: "underline", color: "whitesmoke" }}
          >
            Terms and Conditions
          </Text>{" "}
          of this product
        </Text>
      </View>
    </View>
  );
}
