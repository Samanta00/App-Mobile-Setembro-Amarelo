import React from 'react'
import {Text, View, TouchableOpacity,StyleSheet, Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function Informacoes(){
    return(

       

        <View style={estilo.bloco}>
        <Text style={estilo.titulo}>Sinais do inicio ao comportamento suicída</Text>
<Image source={require('../../assets/imag2.jpg')}/>

            <Text  style={estilo.titulo}>Transtornos Mentais</Text>
            <Text style={estilo.cartilhas}>Você sabia que praticamente todas as 
            pessoas que cometeram suicídio apresentavam pelo menos um transtorno
            psiquiátrico? Pessoas com depressão, transtorno bipolar, trantornos
            relacionados ao uso de drogas lícitas ou ilícitas(álcool, maconha,
            crack e cocaína, por exemplo), esquizofrenia e transtorno de 
            personalidade fazem parte do grupo de risco. Dessa forma, a 
            identificação e o tratamento dos trastornos mentais pelo médico
            psiquiatra estão entre os principais fatores de proteção na prevenção do suicídio. </Text>


            <Text style={estilo.titulo}>Histórico Pessoal</Text>

            <Text style={estilo.cartilhas}>Tentativa Pŕevia é o principal fator de risco para o suicídio.
             indivíduos que já tentaram o suicídio têm de cinco
                a seis vezes mais chances de tentar novamente
            </Text>


            <Text style={estilo.titulo}>Ideação suicida</Text>
            <Text style={estilo.cartilhas}>
            Ideação suicida: Comentários que demonstrem desespero, desesperança e desamparo podem ser manifestação
             de uma ideação suicida. Atenção a expressões como "eu desejaria não ter nascido",
            "caso não nos encontraremos de novo", "eu prefiria estar morto"- são sinais de alerta.
            </Text>

            <Text style={estilo.titulo}>Fatores estressores Crônicos e Recentes</Text>
            <Text style={estilo.cartilhas}>
                Fatores estressores crônicos e recentes: Eventos estressores significativo, como separaçãoconjugal,
                 migração ou perda de uma pessoa próxima,
                além daqueles que levem a prejuizo econômico e social, como falência e perda do emprego,estão associados aosurgimento
                 de pensamentos suicidas.
            </Text>
        </View>



    )


}

const estilo=StyleSheet.create({
    cartilhas:{
        fontStyle:'italic',
        alignItems:'center',
        marginTop:15
    },
    titulo:{color:'black',
    fontWeight: "bold",
    fontSize:15},

  
    bloco:{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        backgroundColor:'#fff',
        marginTop:25
     
    }
})