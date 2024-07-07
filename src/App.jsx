import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Beranda from './screens/Beranda';
import Produk from './screens/Produk';
import Tentang from './screens/Tentang';

const COLORS = {
  primary: '#3498db',
  background: '#f8f9fa',
  text: '#2c3e50',
  inactive: 'gray',
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MenuBawah = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Beranda') {
            iconName = focused ? 'home-circle' : 'home-circle-outline';
          } else if (route.name === 'Produk') {
            iconName = focused ? 'shopping' : 'shopping-outline';
          } else if (route.name === 'Tentang') {
            iconName = focused ? 'information' : 'information-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.inactive,
        tabBarStyle: {
          backgroundColor: COLORS.background,
          borderTopWidth: 0,
          elevation: 10,
          shadowOpacity: 0.1,
          shadowRadius: 20,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })}
    >
      <Tab.Screen name="Beranda" component={Beranda} options={{headerShown: false}}/>
      <Tab.Screen name="Produk" component={Produk} options={{headerShown: false}}/>
      <Tab.Screen name="Tentang" component={Tentang} options={{headerShown: false}}/>
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MenuBawah}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;