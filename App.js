import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeContext, HomeProvider } from './app/context/HomeContext';
import { Main, Welcome, AddTransactions, TransactionDetails } from './app/screens';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default App = () => {
    return (
        <HomeProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown:false,}} initialRouteName="AddTransactions">
                    <Stack.Screen name="Main" component={Main}/>
                    <Stack.Screen name="Welcome" component={Welcome}/>
                    <Stack.Screen name="AddTransactions" component={AddTransactions}/>
                    <Stack.Screen name="TransactionDetails" component={TransactionDetails}/>
                </Stack.Navigator>
            </NavigationContainer>
        </HomeProvider>
    )
}

