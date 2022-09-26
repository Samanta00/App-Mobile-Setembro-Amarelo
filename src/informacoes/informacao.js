import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Informacoes(){
    return(
        <View>
                    <Text>Transtornos mentais: você sabia que praticamente todas as 
            pessoas que cometeram suicídio apresentavam pelo menos um transtorno
             psiquiátrico? Pessoas com depressão, transtorno bipolar, trantornos
              relacionados ao uso de drogas lícitas ou ilícitas(álcool, maconha,
               crack e cocaína, por exemplo), esquizofrenia e transtorno de 
               personalidade fazem parte do grupo de risco. Dessa forma, a 
               identificação e o tratamento dos trastornos mentais pelo médico
                psiquiatra estão entre os principais fatores de proteção na prevenção do suicídio. </Text>

        </View>



    )


}