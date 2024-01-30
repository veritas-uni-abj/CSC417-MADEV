import { StyleSheet, Image } from 'react-native';

export default function Imageviewer({placeholderimg_src, selectedimg}) {
  
        const imgsrc= selectedimg ?{uri:selectedimg}:placeholderimg_src;
  return (
  

        <Image source={imgsrc} style={styles.image}/>
    
  );
}

const styles = StyleSheet.create({

  image:{
    width:320,
    height:440,
    borderRadius:18,
  },

});
