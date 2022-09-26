import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AllTelas from './allTelas';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Textos from './src/apoio/apoio';
import propiedadeApoio from './src/apoio/props';
import Informacoes from './src/informacoes/informacao';
import React from 'react';


const Stack = createStackNavigator();

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='Home' component={AllTelas}/>
      <Stack.Screen name='propiedadeApoio ' component={propiedadeApoio }/>
      <Stack.Screen name='Informacoes' component={Informacoes} />
    </Stack.Navigator>
  )
}

export default function App() {
  
  return (
    <NavigationContainer>
        <MyStack/>
    </NavigationContainer>
  );
}



