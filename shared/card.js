import React from "react";
import {View, StyleSheet} from "react-native";

export default function Card(props){
  return(
    <View style={styles.card}>
      <View style={styles.cardContent}>
        {props.children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card:{
    borderRadius:6,
    elevation:3,
    backgroundColor:'#fff',
    shadowColor:'#333',
    marginVertical:6,
    marginHorizontal:4,
  },
  cardContent:{
    marginHorizontal:18,
    marginVertical:10,
  }
});
