import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo, Feather, MaterialIcons } from "@expo/vector-icons";

export default function LoginWifi() {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFCB05" }}>
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
      <ImageBackground
        style={{ flex: 1, justifyContent: "flex-end" }}
        source={{
          uri: "https://www.dentondentalcenter.com/blog/wp-content/uploads/2020/08/Smiling_in_sun__1597340967_80217.jpg",
        }}
      >
        <View
          style={{ flex: 1, backgroundColor: "rgba(0,0,0,.1)", padding: 16 }}
        >
          <View style={{ paddingVertical: 4 }}>
            <Text style={{ fontFamily: "Poppins-Bold", fontSize: 32 }}>
              Welcome back.
            </Text>
            <Text
              style={{
                fontFamily: "Poppins-Bold",
                fontSize: 32,
                marginVertical: 0,
              }}
              // adjustsFontSizeToFit={true}
            >
              Log in.
            </Text>
          </View>
          <View style={{ flex: 2, justifyContent: "flex-end" }}>
            <TouchableOpacity
              style={{
                backgroundColor: "rgba(255,255,255,.5)",
                height: 80,
                borderRadius: 12,
                paddingVertical: 10,
                paddingHorizontal: 25,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <Entypo name="log-out" size={24} color="#FFCB05" />
              <View style={{ flexDirection: "column" }}>
                <Text style={{ fontFamily: "Poppins-Bold", color: "#333333" }}>
                  Resume Session
                </Text>
                <Text
                  style={{ fontFamily: "Poppins-Medium", color: "#666666" }}
                >
                  MOLOKO CHRIS
                </Text>
              </View>
              <MaterialIcons name="navigate-next" size={24} color="#333333" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "rgba(255,255,255,.5)",
                height: 80,
                borderRadius: 12,
                paddingVertical: 10,
                paddingHorizontal: 25,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <Feather name="wifi" size={24} color="#FFCB05" />
              <View style={{ flexDirection: "column" }}>
                <Text style={{ fontFamily: "Poppins-Bold", color: "#333333" }}>
                  Log in with Wi-Fi
                </Text>
                <Text
                  style={{ fontFamily: "Poppins-Medium", color: "#666666" }}
                >
                  OR ANOTHER NUMBER
                </Text>
              </View>
              <MaterialIcons name="navigate-next" size={24} color="#333333" />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
