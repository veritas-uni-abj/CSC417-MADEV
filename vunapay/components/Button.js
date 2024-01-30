import React from "react";
import { Pressable, StyleSheet, Text, View  } from "react-native";


export default function Button({label}) {

    return(
        <View style={styles.container}>
            <Pressable style={styles.Button}>
                <Text style={styles.butlabel}> {label} </Text>
                </Pressable>
        </View>

    )
    
}
const styles = StyleSheet.create({
    container:{
    
        width: 320,
    height: 100,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",

    },

    Button:{
        backgroundColor: "#fff",
        width:"70%",
        height:"80%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius:20,
        flexDirection: "row"
    },
    butlabel:{
        fontSize:20,
        fontWeight:"bold"

    }
})
