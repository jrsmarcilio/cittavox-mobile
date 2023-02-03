import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SVG } from '../assets';
import { theme } from '../global/styles/theme';
import { Home } from '../screens/Home';

import Location from '../assets/svg/location.svg';
import { View } from 'react-native';
import { SVGComponent } from '../components/Svg';

const Tab = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.secondary10,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <SVG.Home width={size} height={size} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Localização"
        component={Home}
        options={{
          tabBarLabel: 'Localização',
          tabBarIcon: ({ color, size }) => (
            <SVG.LocationFill width={size} height={size} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Histórico"
        component={Home}
        options={{
          tabBarLabel: 'Histórico',
          tabBarIcon: ({ color, size }) => (
            <SVG.History width={size} height={size} fill={color} />
          ),

        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Home}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <SVG.User width={size} height={size} fill={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}