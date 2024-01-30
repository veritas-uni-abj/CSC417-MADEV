import React from "react";
import { StyleSheet, Text,Button, TextInput,View } from "react-native";
import firebase from "../firebase";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import { getAuth, browserLocalPersistence, setPersistence,getReactNativePersistence } from 'firebase/auth';


export default function Login(){

    const auth = getAuth();
auth.setPersistence(browserLocalPersistence);

    const [email,setEmail]=React.useState('');
    const [password,setPassword]=React.useState('');

    const handleLogin=async()=>{

        try{
            await firebase.auth().signInWithEmailAndPassword(email,password);
        }
        catch(error){
            console.log("login error ", error.message);
        }


    }
    return(

        <View style={styles.containers}>
            <Text style={styles.text}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={(text)=>setEmail(text)}
                />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={(text)=>setPassword(text)}
                />
            <Button title="Login" onPress={handleLogin}/>
            
           
        </View>
    );

}
const styles = StyleSheet.create({
containers:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
},
input:{
    width:"80%",
    height:40,
    borderColor:'gray',
    borderWidth: 1,
    marginVertical:10,
    backgroundColor:'#fff',
    paddingHorizontal:10,
    borderRadius:10
},

})