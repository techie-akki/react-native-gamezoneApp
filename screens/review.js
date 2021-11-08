import React from "react";
import { View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function Review(){

  // const clickHandler = () => {
  //   navigation.goBack();
  // }

  return (
    <View style = {globalStyles.container}>
      <Text style={globalStyles.titleText}>Review Screen</Text>
      {/* <Button title='back to home' onpress={clickHandler} /> */}
    </View>
  )
}

