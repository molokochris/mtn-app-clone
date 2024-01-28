import { StatusBar, Text, View } from "react-native";
import AuthNavigation from "./src/navigation/AuthNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins/Poppins-Medium.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
    "Poppins-Black": require("./assets/fonts/Poppins/Poppins-Black.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    "Syne-Regular": require("./assets/fonts/Syne/static/Syne-Regular.ttf"),
    "Syne-Medium": require("./assets/fonts/Syne/static/Syne-Medium.ttf"),
    "Syne-Bold": require("./assets/fonts/Syne/static/Syne-Bold.ttf"),
    "Syne-SemiBold": require("./assets/fonts/Syne/static/Syne-SemiBold.ttf"),
    "Syne-ExtraBold": require("./assets/fonts/Syne/static/Syne-ExtraBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <StatusBar
        barStyle={"light-content"}
        translucent={false}
        backgroundColor={"#FFCB05"}
      />
      <NavigationContainer>
        <AuthNavigation />
      </NavigationContainer>
    </View>
  );
}
