import { StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./src/navigation/TabNavigation";
import MovieDetailsScreen from "./src/screen/MovieDetailsScreen";
import SeatBookingScreen from "./src/screen/SeatBookingScreen";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


// SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    // 'Inter-Black': require('./assets/fonts/Inter-Black.otf',
    'poppins_black': require("./src/assets/Fonts/Poppins-Black.ttf"),
    "poppins_bold": require("./src/assets/Fonts/Poppins-Bold.ttf"),
    "poppins_extrabold":require("./src/assets/Fonts/Poppins-ExtraBold.ttf"),
    "poppins_extralight":require("./src/assets/Fonts/Poppins-ExtraLight.ttf"),
    "poppins_light":require("./src/assets/Fonts/Poppins-Light.ttf"),
    "poppins_medium":require("./src/assets/Fonts/Poppins-Medium.ttf"),
    "Poppins-Regular":require("./src/assets/Fonts/Poppins-Regular.ttf"),
    "poppins_semibold":require("./src/assets/Fonts/Poppins-SemiBold.ttf"),
    "poppins_thin":require("./src/assets/Fonts/Poppins-Thin.ttf"),
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
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen 
          name="Tab" 
          component={TabNavigator}
          options={{ animation: "default"}} 
        />
        <Stack.Screen 
          name="Movie Details" 
          component={MovieDetailsScreen} 
          options={{ animation: "slide_from_right"}}
        />
        <Stack.Screen 
          name="Seat Booking" 
          component={SeatBookingScreen} 
          options={{ animation: "slide_from_bottom"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
// }

export default App;

const styles = StyleSheet.create({});
