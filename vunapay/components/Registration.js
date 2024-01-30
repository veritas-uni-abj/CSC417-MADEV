import React from "react";
import { StyleSheet,Pressable , Text,View } from "react-native";
import Button from "./Button";


export default function Registration({navigation}){
    return(

        <View style={styles.welcomeconteiner}>
            <Text style={styles.onboardtxt}>🚀 Hey there,{"\n"} future 
            trailblazer! {"\n"} Get ready</Text>

        <View style={styles.welcomenotice}>
                <Text style={styles.notes}> 
                We want to
                 revolutionize the way you pay for dues and manage
                  your finances as a 
                    student with our user-friendly payment 
                    app designed just for you. Here's a quick guide to get
                     you started:</Text>
                      <Pressable
             onPress={()=>navigation.navigate('about')} 
             style ={styles.nextscreenbut} >
            <Text >see more ➡️ </Text>
             </Pressable>
              </View>
            
            <View>
           
            
            </View>
            
           
        </View>
        
    );
}
const styles = StyleSheet.create({
    welcomeconteiner:{

        flex : 1,
        alignItems:"center",
        justifyContent:"center",
        flexWrap:"wrap",
        marginLeft: 20
        

    },
    welcomenotice:{
        backgroundColor: '#fff',
        borderRadius:10,
        padding: 10,
        width:300,
        height:200,
        
        

    },
    onboardtxt:{
        fontSize: 30,
        marginBottom:50,
    },
    notes:{
    fontSize: 18
    },
    nextscreenbut:{
        alignItems:"center",
        marginTop:20,
        fontSize:30,
        fontWeight:300,


    }
    
})