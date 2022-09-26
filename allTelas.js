import { StatusBar } from 'expo-status-bar';
import React from "react";
import {Text,View, StyleSheet,Button,Alert, TouchableOpacity} from 'react-native'
import Homer from "./src/inicio/inicio";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import propiedadeApoio from './src/apoio/props';
import Textos from './src/apoio/apoio';






export default function AllTelas({navigation}){

const entrar=()=>{
   navigation.navigate('propiedadeApoio ')
}


    return(
        <View style={styles.Body}>
            <Homer/>
            <StatusBar barStyle='dark-content'  backgroundColor='#fff'/>

        <TouchableOpacity style={styles.btnAcessar} onPress={()=>entrar()}>
          <Text style={styles.textAcessar}> > </Text>
        </TouchableOpacity>
        </View>
    )
}



const styles=StyleSheet.create({
    Body:{
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%'

    },
    btnAcessar:{
        backgroundColor:'gray',
        color:'red',
        
        width:'10%',
        height:'3%',
        borderWidth:1,
        borderRadius:10
    },
    textAcessar:{
        textAlign:'center'
    }

})