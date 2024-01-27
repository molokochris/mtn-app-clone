import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { Entypo, Feather, MaterialIcons } from "@expo/vector-icons";

export default function LoginWifi() {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFCB05" }}>
      <View
        style={{
          paddingHorizontal: 36,
          paddingVertical: 20,
          backgroundColor: "white",
          flexDirection: "row",
          // elevation: 4,
          // shadowColor: "black",
        }}
      >
        <View
          style={{
            paddingVertical: 2,
            paddingHorizontal: 14,
            borderWidth: 2,
            borderRadius: 100,
          }}
        >
          <Text
            style={{
              fontWeight: "900",
              fontSize: 18,
              fontFamily: "Poppins-Regular",
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
          <View style={{ paddingVertical: 10 }}>
            <Text style={{ fontFamily: "Poppins-Bold", fontSize: 34 }}>
              Welcome back.
            </Text>
            <Text style={{ fontFamily: "Poppins-Bold", fontSize: 34 }}>
              Log in.
            </Text>
          </View>
          <View style={{ flex: 2, justifyContent: "flex-end" }}>
            <View
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
              <Text style={{ fontFamily: "Poppins-Medium", color: "#333333" }}>
                Resume Session
              </Text>
              <MaterialIcons name="navigate-next" size={24} color="#333333" />
            </View>
            <View
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
              <Text style={{ fontFamily: "Poppins-Medium", color: "#333333" }}>
                Log in with Wi-Fi
              </Text>
              <MaterialIcons name="navigate-next" size={24} color="#333333" />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
