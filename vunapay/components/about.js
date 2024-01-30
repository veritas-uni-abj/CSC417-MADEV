import React from "react";
import { StyleSheet,Pressable , Text,View } from "react-native";



export default function About({navigation}){
    const dos = [
        {
            id: 1,
            message: "Link Your Accounts: Connect your bank account ",


        },
        {
            id: 2,
            message:" Explore Your Dashboard: Your financial hub is just a tap away."
        }
    ]
    return(

        

        <View style={styles.welcomeconteiner}>
            <Text style={styles.onboardtxt}>💪 what you can do!</Text>

        <View style={styles.welcomenotice}>
                <Text style={styles.notes}> 
                Pay school due: with ease, pay and track payments{'\n'}
               Link Your Accounts: Connect your bank account {'\n'}
                Explore Your Dashboard: Your financial hub  just a 
                tap away.{'\n'}🤸
                </Text>


              </View>

                 <View style={styles.butcontainer}>
            <Pressable style={styles.Button} onPress={() =>
               navigation.navigate('Signup')}>
            <Text style={styles.butlabel}>Register</Text>
          </Pressable>

             <Pressable style={styles.Buttonlogin} onPress={() =>
               navigation.navigate('login')}>
            <Text style={styles.butlabellogin}>login</Text>
          </Pressable>
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
        
        

    },
    welcomenotice:{
        backgroundColor: '#fff',
        borderRadius:10,
        padding: 10,
        width:300,
        height:200,
        alignSelf:"flex-start",
        marginLeft: 30
        
        

    },
    onboardtxt:{
        fontSize: 20,
        padding:10
    },
    notes:{
    fontSize: 17
    },
    nextscreenbut:{
        marginTop:1,
        fontSize:18,
        fontWeight:300,
    },
    
    butcontainer:{
    
        width: 320,
    height: 100,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop:50

    },

    Button:{
        backgroundColor: "#235",
        width:"50%",
        height:"60%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius:20,

    },
    butlabel:{
        fontSize:15,
        fontWeight:"bold",
        color:"#fff"

    },
    butlabellogin:{
      fontSize: 20,
      fontWeight:"300",
      marginTop:30,

    }
})