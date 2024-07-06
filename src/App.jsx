import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Komponen layar
const Beranda = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Selamat datang di Beranda</Text>
  </View>
);

const Produk = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Daftar Produk</Text>
  </View>
);

const Tentang = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Tentang Kami</Text>
  </View>
);

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MenuBawah = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
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
        tabBarActiveTintColor: '#3498db',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#f8f9fa',
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
          backgroundColor: '#3498db',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })}>
      <Tab.Screen name="Beranda" component={Beranda} />
      <Tab.Screen name="Produk" component={Produk} />
      <Tab.Screen name="Tentang" component={Tentang} />
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
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
});

export default App;
