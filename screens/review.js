import React from "react";
import { View, Text,} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";

export default function Review({route}){

  

  return (
    <View style = {globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{route.params.title}</Text>
        <Text style={globalStyles.titleText}>{route.params.body}</Text>
        <Text style={globalStyles.titleText}>{route.params.rating}</Text>
      </Card>
    </View>
  )
}

