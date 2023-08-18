import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./src/navigation/TabNavigation";
import MovieDetailsScreen from "./src/screen/MovieDetailsScreen";
import SeatBookingScreen from "./src/screen/SeatBookingScreen";

const Stack = createNativeStackNavigator();

const App = () => {
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

export default App;

const styles = StyleSheet.create({});
