import { FontAwesome5 } from "@expo/vector-icons";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import { Pressable, Text } from 'react-native';
import ProductDetailScreen from '../screen/ProductDetailScreen';
import ProductScreen from '../screen/ProductScreen';
import ShoppingCart from '../screen/ShoppingCart';


const Stack = createNativeStackNavigator();

const Navigation = () => {
    // const navigation = useNavigation()
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ contentStyle: { backgroundColor: "white"}}}>
            <Stack.Screen 
                name="Products" 
                component={ProductScreen}
                options={({ navigation })=>
                    ({ headerRight:()=>
                        ( <Pressable 
                                onPress={() => navigation.navigate("Carts")} 
                                style={{ flexDirection: "row" }}
                            >
                                <FontAwesome5 
                                    name="shopping-cart" 
                                    color="gray" size={24} 
                                />
                                <Text style={{ fontWeight: "500", marginLeft: 5}}>
                                        1
                                </Text>
                            </Pressable> 
                            )
                        })}   
            />
            <Stack.Screen 
                name="Product Details" 
                component={ProductDetailScreen} 
                // options={{ presentation: "modal" }}
            />
            <Stack.Screen name="Carts" component={ShoppingCart} />
        </Stack.Navigator>
     </NavigationContainer>
  )
}

export default Navigation
