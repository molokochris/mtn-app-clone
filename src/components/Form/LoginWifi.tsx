import { View, Text, ImageBackground } from "react-native";
import React from "react";

export default function LoginWifi() {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFCB05" }}>
      <View
        style={{
          paddingHorizontal: 36,
          paddingVertical: 20,
          backgroundColor: "white",
          flexDirection: "row",
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
        style={{ flex: 1, padding: 16, justifyContent: "flex-end" }}
        source={{
          uri: "https://www.dentondentalcenter.com/blog/wp-content/uploads/2020/08/Smiling_in_sun__1597340967_80217.jpg",
        }}
      >
        <View
          style={{
            backgroundColor: "rgba(255,255,255,.5)",
            height: 80,
            borderRadius: 12,
            padding: 10,
            justifyContent: "center",
            marginBottom: 16,
          }}
        >
          <Text>Wait</Text>
        </View>
        <View
          style={{
            backgroundColor: "rgba(255,255,255,.5)",
            height: 80,
            borderRadius: 12,
            padding: 10,
            justifyContent: "center",
          }}
        >
          <Text>Wait</Text>
        </View>
      </ImageBackground>
    </View>
  );
}
