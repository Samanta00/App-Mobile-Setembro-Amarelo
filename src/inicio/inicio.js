import React from "react";
import {View,Text, StyleSheet, Image, Button} from 'react-native'

export default function Homer(){
    return (
        <View style={styles.container}>
          <Text style={styles.paragraph}>Setembro </Text>
          <Text style={styles.amarelo}>Amarel   o </Text>
         <Image style={styles.logo} source={require('../../assets/lacoAmarelo.jpeg')}/>
         
        

          <Text style={styles.introducao}>Mês de Prevenção ao Suicídio</Text>
          <Text style={styles.introducao}>  A vida é a melho escolha   </Text>


     <View style={styles.introducao2}>
        <Text>    O Suicídio é uma das principais causas de{'\n'}mortlidade no Brasil e no mundo.No entanto, o{'\n'}Conhecimento
          dos fatores de risco e sinais de{'\n'}    alerta pode auiliar na sua Prevenção.
         </Text>      
     </View>



          <Text style={styles.link}>www.setembroamarelo.com</Text>

        </View>
      );
    }
     
    const styles = StyleSheet.create({
      container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        backgroundColor:'#fff',
        flex:2
       
      },
      
      introducao2:{
        marginTop:34
      },
      amarelo:{
        fontSize:50
      },
      link:{
        color:'red',
        fontSize:15
      },
     
      paragraph: {
        fontSize: 14,
        marginRight:124,    
        color:'red',
        fontSize:20,
        textAlign:'left'
      },
      logo: {
        height: 88,
        width: 38,
        marginTop:-87,
        marginLeft:110
      },
      introducao:{
        marginRight:37
      }

    });
     
    
    