import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colorConstant } from '../assets/styles';
import Dashboard from './Dashboard';
import User from './User';

const Tab = createBottomTabNavigator();

const fileStyle = StyleSheet.create({
  menuIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

const renderTabLabel = (label, focused) => (
  <Text
    style={{
      color: focused ? colorConstant.secondaryDarkGreen : '#00',
      fontSize: 13,
      fontWeight: focused ? '600' : '400',
    }}>
    {label}
  </Text>
);


const renderTabIcon = (focusedIcon, unfocusedIcon, focused) => (
  <Image
    source={focused ? focusedIcon : unfocusedIcon}
    style={fileStyle.menuIcon}
    tintColor={colorConstant.secondaryDarkGreen}
  />
);

const tabScreens = [
  {
    name: 'Dashbaord',
    label: 'Home',
    testID: 'HomeTab',
    focusedIcon: require('../assets/images/home.png'),
    unfocusedIcon: require('../assets/images/homeot.png'),
    component: Dashboard
  },
  {
    name: 'Profile',
    label: 'Profile',
    testID: 'Profile',
    focusedIcon: require('../assets/images/user.png'),
    unfocusedIcon: require('../assets/images/userot.png'),
    component:User
  },
];

const HomeScreen = props => {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme(); 


  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <Tab.Navigator
        initialRouteName="Dashbaord"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: colors.background,
            paddingBottom: insets.bottom + 8, 
            height: 60 + insets.bottom, 
            borderColor:colorConstant.secondaryDarkGreen,
            borderTopWidth:0.5 ,
          },
        }}>
        {tabScreens.map(screen => (
          <Tab.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={{
              tabBarTestID: screen.testID,
              tabBarLabel: ({ focused }) => renderTabLabel(screen.label, focused),
              tabBarIcon: ({ focused }) =>
                renderTabIcon(screen.focusedIcon, screen.unfocusedIcon, focused),
            }}
          />
        ))}
      </Tab.Navigator>
    </View>
  );
};

export default HomeScreen;
