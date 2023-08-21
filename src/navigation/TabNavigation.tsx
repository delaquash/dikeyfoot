import { StyleSheet, View } from "react-native";
import { COLORS, FONTSIZE, SPACING } from "../../theme/theme";
import HomeScreen from "../screen/HomeScreen";
import SearchScreen from "../screen/SearchScreen";
import TicketScreen from "../screen/TicketScreen";
import UserAccountScreen from "../screen/UserAccountScreen";
import CustomIcon from "../components/CustomIcon";
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const TabNavigator =()=> {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard:true,
                headerShown : false ,
                tabBarStyle : {
                    backgroundColor: COLORS.Black,
                    borderTopWidth: 0,
                    height: SPACING.space_10 * 10
                }
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({focused, color, size})=>{
                        return(
                            <View 
                                /* The `style={[styles.activeTabBackground, focused ? {backgroundColor:
                                COLORS.Orange} : {}]}` is applying styles to the active tab
                                background. */
                                style={[styles.activeTabBackground, 
                                    focused ? {backgroundColor: COLORS.Orange} : {}
                                ]}>
                                <Ionicons name="home"  
                                    size={FONTSIZE.size_30}
                                    color={COLORS.White}
                                />
                            </View>
                        )
                    } 
                }} 
            />
            <Tab.Screen 
                name="Search" 
                component={SearchScreen} 
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({focused, color, size})=>{
                        return(
                            <View 
                                /* The `style={[styles.activeTabBackground, focused ? {backgroundColor:
                                COLORS.Orange} : {}]}` is applying styles to the active tab
                                background. */
                                style={[styles.activeTabBackground, 
                                    focused ? {backgroundColor: COLORS.Orange} : {}
                                ]}>
                                <Ionicons 
                                    name="search-outline"
                                    size={FONTSIZE.size_30}
                                    color={COLORS.White}
                                />
                            </View>
                        )
                    } 
                }} 
            />
            <Tab.Screen 
                name="Ticket" 
                component={TicketScreen} 
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({focused, color, size})=>{
                        return(
                            <View 
                                /* The `style={[styles.activeTabBackground, focused ? {backgroundColor:
                                COLORS.Orange} : {}]}` is applying styles to the active tab
                                background. */
                                style={[styles.activeTabBackground, 
                                    focused ? {backgroundColor: COLORS.Orange} : {}
                                ]}>
                                <Ionicons 
                                    name="document-outline"
                                    size={FONTSIZE.size_30}
                                    color={COLORS.White}
                                />
                            </View>
                        )
                    } 
                }} 
            />
            <Tab.Screen 
                name="User" 
                component={UserAccountScreen} 
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({focused, color, size})=>{
                        return(
                            <View 
                                /* The `style={[styles.activeTabBackground, focused ? {backgroundColor:
                                COLORS.Orange} : {}]}` is applying styles to the active tab
                                background. */
                                style={[styles.activeTabBackground, 
                                    focused ? {backgroundColor: COLORS.Orange} : {}
                                ]}>
                                <Ionicons
                                    name="person-outline"
                                    size={FONTSIZE.size_30}
                                    color={COLORS.White}
                                />
                            </View>
                        )
                    } 
                }} 
            />
        </Tab.Navigator>
    )
}

export default TabNavigator;

const styles = StyleSheet.create({
    activeTabBackground: {
        backgroundColor: COLORS.Black,
        padding: SPACING.space_18,
        borderRadius: SPACING.space_18 * 10
    }
})