
import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { color, font, size } from '../constants/constant'
import Home from './Home';
import Transactions from './Transactions';
import Settings from './Settings';
import { MaterialCommunityIcons, Entypo, FontAwesome5, MaterialIcons } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();


const Main = () => {
  return (
    <View style={{
        height: "100%"
    }}>
         <Tab.Navigator 
            screenOptions={{ 
                headerShown: false, 
                tabBarStyle: { 
                    height:60,
                },  
                tabBarActiveTintColor: color.pry,
            }} >
          <Tab.Screen name="Home" component={Home} options={{
              tabBarIcon: ({focused, color, size})=> (
                  <Entypo name="home" size={focused?40:24} color={color} />
              )
            }} />
          <Tab.Screen name="Transactions" component={Transactions} options={{
              tabBarIcon: ({focused, color,size})=>(
                  <MaterialCommunityIcons name="bank-transfer" size={focused?40:25} color={color} />
              )
          }} />
          <Tab.Screen name="Settings" component={Settings} options={{
              tabBarIcon: ({focused, color,size})=>(
                <MaterialIcons name="settings" size={focused?40:25} color={color} />
              )
          }} />
        </Tab.Navigator>
    </View>
  )
}

export default Main
