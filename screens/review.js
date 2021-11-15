import React from "react";
import { View, Text, Image} from "react-native";
import { globalStyles, images } from "../styles/global";
import Card from "../shared/card";

export default function Review({route}){
  const rating = route.params.rating;
  

  return (
    <View style = {globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{route.params.title}</Text>
        <Text style={globalStyles.reviewText}>{route.params.body}</Text>
        <View style={globalStyles.rating}>
          <Text>GameZone rating: </Text>
          <Image source={images.ratings[rating]}  />
        </View>
      </Card>
    </View>
  )
}

