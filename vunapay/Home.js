import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Pressable, Text, View } from 'react-native';
import Button from './components/Button';
import WelcomeImage from './components/Welcomimg';
import Registration from './components/Registration';
import Login from './components/login';





export default function HomeScreen({ navigation }) {
  const image_src = require("./assets/studpay.jpeg");
  return (
    <View style={styles.container}>
      <View style={styles.imgcontainer}>
        <WelcomeImage imgrsource_url={image_src} />
        

        <View style={styles.textcontr}>
          
          <Text style={styles.welcometext}> Vuna-Pay</Text>
           
        </View>
       <View style={styles.butcontainer}>
            <Pressable style={styles.Button} onPress={() =>
               navigation.navigate('Registration')}>
            <Text style={styles.butlabel}>Get started</Text>
          </Pressable>

             <Pressable style={styles.Buttonlogin} onPress={() =>
               navigation.navigate('login')}>
            <Text style={styles.butlabellogin}>login</Text>
          </Pressable>
          </View>
      </View>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4940',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgcontainer: {
    flex: 1,
    marginBottom:50
  
  },
  welcometext: {
    fontSize: 40,
    color: "#1229",
    fontWeight: "bold",
  },
  textcontr: {
    justifyContent: "center",
    alignItems: "center",
  },
   

    butcontainer:{
    
        width: 320,
    height: 100,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",

    },

    Button:{
        backgroundColor: "#295",
        width:"70%",
        height:"70%",
        marginTop:50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius:20,
    },
    butlabel:{
        fontSize:20,
        fontWeight:"bold",
        color:"#fff"

    },
    butlabellogin:{
      fontSize: 20,
      fontWeight:"300",
      marginTop:10,

    }
});
