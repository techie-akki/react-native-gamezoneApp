import React, { useState } from "react";
import {View, Text, TouchableOpacity, FlatList} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";

export default function Home({navigation}){
  const [reviews,setReviews] = useState([
    {title: 'Mangalam, Fragrance of rose', rating:5, body:'This incense sticks fragrance is awesome!',key:'1'},
    {title: 'Not so "Final" fantasy', rating:4, body:'Worst Functionality ever:(',key:'2'},
    {title: 'Gotta catch them all (again)', rating:3, body:'This deo is a good choice gonna try other variants.',key:'3'},
  ]);
 

  return (
    <View style = {globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({item})=>(
          <TouchableOpacity onPress={()=>navigation.navigate('Review',item)}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        
        )} 
      />
      
    </View>
  )
}

