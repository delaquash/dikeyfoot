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
    'Poppins_Black': require("./src/assets/Fonts/Poppins-Black.ttf"),
    "Poppins_Bold": require("./src/assets/Fonts/Poppins-Bold.ttf"),
    "Poppins_Extrabold":require("./src/assets/Fonts/Poppins-ExtraBold.ttf"),
    "Poppins_Extralight":require("./src/assets/Fonts/Poppins-ExtraLight.ttf"),
    "Poppins_Light":require("./src/assets/Fonts/Poppins-Light.ttf"),
    "Poppins_Medium":require("./src/assets/Fonts/Poppins-Medium.ttf"),
    "Poppins-Regular":require("./src/assets/Fonts/Poppins-Regular.ttf"),
    "Poppins_Semibold":require("./src/assets/Fonts/Poppins-SemiBold.ttf"),
    "Poppins_Thin":require("./src/assets/Fonts/Poppins-Thin.ttf"),
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
