import React from 'react';
import { StyleSheet,Text,TouchableOpacity, View } from 'react-native';

export default function FlatButton({text, onPress}){
  return(
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{ text }</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius:15,
    paddingVertical:14,
    paddingHorizontal:10,
    backgroundColor:'#64ad6a',
  },
  buttonText: {
    color:'#ddd',
    fontWeight:'bold',
    textTransform:'uppercase',
    fontSize:16,
    textAlign:'center',
    letterSpacing:1,
  }
})