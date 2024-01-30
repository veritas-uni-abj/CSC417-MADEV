import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Registration from './components/Registration';
import Login from './components/login';
import HomeScreen from './Home';
import About from './components/about';
import Signup from './components/Signup';

const Stack = createStackNavigator();

export default function App() {
 

  return (
    
        
      

        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Registration" component={Registration} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name='about' component={About}/>
          </Stack.Navigator>
        </NavigationContainer>

      


    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4944',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgcontainer: {
    flex: 1,
    paddingTop: 3,
  },
  welcometext: {
    fontSize: 50,
    color: "#1229",
    fontWeight: "bold",
  },
  textcontr: {
    justifyContent: "center",
    alignItems: "center",
  },
});
