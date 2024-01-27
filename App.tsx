import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import AuthNavigation from "./src/navigation/AuthNavigation";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
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
      <StatusBar style="auto" />
      <AuthNavigation />
    </View>
  );
}
