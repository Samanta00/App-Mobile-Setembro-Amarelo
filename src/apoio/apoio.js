import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Informacoes from '../informacoes/informacao';

 
const imagem1='../../assets/papelParede.jpg'


export default function Textos(props,{navigation}) {

  const botao=()=>{
   navigation.navigate.this.props("Informacoes")
 }
  return (
        <View >
          <ScrollView>

            <ImageBackground source={require(imagem1)} >

                  <View style={styles.mensagem}>
                      <Text style={styles.titulo}>Mensagens de Apoio</Text>
                      <Text style={styles.apoio}>Apoie sempre Todas as Pessoas que Necessitam de apoio</Text>
                  </View>
               

                  <Text style={styles.container}>Joana Andrade:{'\n'}{props.texto1}</Text>
            
                  <Text style={styles.paragraph}>Paulo Marques:{'\n'}{props.texto2}</Text>

                  <Text style={styles.container}>Joana Andrade:{'\n'}{props.texto3}</Text>

                  <Text style={styles.paragraph}>Paulo Marques:{'\n'}{props.texto4}</Text>

                  <Text style={styles.paragraph}>Paulo Marques:{'\n'}{props.texto5}</Text>

                  <Text style={styles.container}>Joana Andrade:{'\n'}{props.texto6}</Text>

                

            </ImageBackground>

            <TouchableOpacity onPress={()=>botao()} style={styles.botao}>

              <Text style={styles.botaoMensagem}> > </Text>

            </TouchableOpacity>


                  <Text style={styles.margem}> {'\n'}</Text>

          </ScrollView>


            </View>
 
  );
}

 

 
const styles = StyleSheet.create({
  container: {
    marginRight: 'auto',
    padding: 24,
    backgroundColor: '#F9D808',
    borderTopRightRadius:31,
    marginTop: 30,
    width: '80%',
  },
    mensagem:{
      backgroundColor:'white'
    },
    apoio:{marginLeft:10},


    titulo:{
    textAlign:'center',
    color:'red',
    fontSize:30
 
    },
    botaoMensagem:{
      textAlign:'center'
    },
    paragraph: {
      marginLeft: '20%',
      marginRight: 'auto',
      padding: 24,
      backgroundColor: '#F9D808',
      borderTopLeftRadius:31,
      marginTop: 30,
      width: '80%',
    },
    botao:{
      backgroundColor:'gray',
      color:'red',
      marginLeft:160,
      width:'10%',
      height:'3%',
      borderWidth:1,
      borderRadius:10
    }
});

