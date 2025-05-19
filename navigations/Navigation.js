import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { colorConstant } from '../assets/styles';
import Dashboard from '../screens/Dashboard';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import User from '../screens/User';

const Stack = createNativeStackNavigator();

const MyTheme = {
	...DefaultTheme,
	colors: {
	  ...DefaultTheme.colors,
	  background: colorConstant.oliveGreenBg, 
	},
  };

function Navigation() {


	return (
	<NavigationContainer theme={MyTheme}>
	<Stack.Navigator
				initialRouteName="LoginScreen"
				screenOptions={{
					activeTintColor: colorConstant.amcBlue,
					headerShown: false,
				}}>
			    <Stack.Screen name="LoginScreen" component={LoginScreen} />
				<Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="Dashboard" component={Dashboard} />
				<Stack.Screen name="User" component={User} />

    </Stack.Navigator>
    </NavigationContainer>
    )
}

export default Navigation;
