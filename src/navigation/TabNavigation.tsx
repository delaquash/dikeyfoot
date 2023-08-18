import { View } from "react-native";
import { COLORS, FONTSIZE } from "../../theme/theme";
import HomeScreen from "../screen/HomeScreen";
import SearchScreen from "../screen/SearchScreen";
import TicketScreen from "../screen/TicketScreen";
import UserAccountScreen from "../screen/UserAccountScreen";
import CustomIcon from "../components/CustomIcon";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const TabNavigator =()=> {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Ticket" component={TicketScreen} />
            <Tab.Screen name="User" component={UserAccountScreen} />
        </Tab.Navigator>
    )
}

export default TabNavigator;