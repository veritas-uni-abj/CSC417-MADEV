import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Imageviewer from './components/imageviewer';
import Buttoncomp from './components/button';
import * as ImagePicker from "expo-image-picker"

const placeholderimg = require('./assests/ocean.jpeg')
export default function App() {


  

{/**
IMAGE GALLERY APIs
expo-image-picker provides the 
launchImageLibraryAsync() method that 
displays the system 
UI for choosing an image or a video from the device's
 media library

 MODAL 
 React Native provides a <Modal> component that presents content
  above the rest of your app. In general, modals are used to draw
   a user's attention toward critical information or guide them to take actio
 */}

 
  const [showAppotions, setShowAppoptions] = useState(false)

 const [selectedimg, setselectimg]= useState(null);

 const pickimgAsync =  async()=>{
  let result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing:true,
    quality:1
  });
  if(!result.canceled){
    setselectimg(result.assets[0].uri)
    setShowAppoptions(true)
  }
  else{
    alert("you did not select any image ")
  }
 };



  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <Imageviewer placeholderimg_src={placeholderimg}
      selectedimg={selectedimg}/>
      </View>

      
      <View style={styles.footercontr}>
        <Buttoncomp theme="primary" label="Choose a photo"  
        onPresshandler={pickimgAsync}/>
        <Buttoncomp label="use this photo" 
        onPresshandler={()=>setShowAppoptions(true)}/>
      </View>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#35343',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer:{
    flex:1,
    paddingTop:58,
  },
  footercontr:{
    flex:1/3,
    alignItems:'center',
  }

});