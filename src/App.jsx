import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Beranda from './screens/Beranda';
import Tentang from './screens/Tentang';
import Produk from './screens/Produk';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const MenuBawah = () => {
  return (
    <Tabs.Navigator screenOptions={{tabBarActiveTintColor: 'blue'}}>
      <Tabs.Screen
        name="Beranda"
        component={Beranda}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={38} />
          ),
        }}
      />
      <Tabs.Screen
        name="Produk"
        component={Produk}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color, size}) => (
            <Icon name="shopping" color={color} size={38} />
          ),
        }}
      />
      <Tabs.Screen
        name="Tentang"
        component={Tentang}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color, size}) => (
            <Icon name="information" color={color} size={38} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="Tab"
          component={MenuBawah}
          options={{headerShown: false}}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
