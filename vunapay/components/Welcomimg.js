import React from "react";
import { StyleSheet, Pressable, View , Image} from "react-native";

export default function WelcomeImage({imgrsource_url}){
    
    return(
        
        <Image style={styles.imagecore} source={imgrsource_url}/>
    );
}
const styles = StyleSheet.create({
    imagecore:{
        marginTop:50,
        marginBottom:0,
    width:320,
    height:440,
    borderRadius:18,
  
    }


})