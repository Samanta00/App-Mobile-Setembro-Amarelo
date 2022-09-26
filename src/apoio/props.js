import react from "react";
import Textos from "./apoio";
import { StyleSheet, Text, View,TouchableOpacity  } from 'react-native';

export default function propiedadeApoio(){

const botao=()=>{
   let resposta=navigation.navigate("Informacoes")
 }
    return(
       <View>
         <Textos texto1='Paulo Estou tendo uma crise de ansiedade'
                 texto2='Como Assim? onde você está?'
                 texto3='Estava no Trabalho e derramei café na papelada que já estava pronta para amanhã, estou me sentindo inútil não consigo fazer nada direito, acho que serei demitida'
                 texto4='calma, tudo vai se resolver, você tem valor, você não está sozinha estou aqui para te dar todo o apoio necessário'
                 texto5='estou chegando ai em 5 minutos e te ajudo a resolver essa papelada'
                 texto6='está bem, você é um ótimo amigo e uma ótima pessoa'
                   />   


    </View>     
    )

}

