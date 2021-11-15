import React, { useState } from "react";
import {View, Text, TouchableOpacity, FlatList, Modal} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import { MaterialIcons } from '@expo/vector-icons';

export default function Home({navigation}){
  const [modalOpen,setModalOpen] = useState(false);

  const [reviews,setReviews] = useState([
    {title: 'Mangalam, Fragrance of rose', rating:5, body:'This incense sticks fragrance is awesome!',key:'1'},
    {title: 'Not so "Final" fantasy', rating:4, body:'Worst Functionality ever:(',key:'2'},
    {title: 'Gotta catch them all (again)', rating:3, body:'This deo is a good choice gonna try other variants.',key:'3'},
  ]);
 

  return (
    <View style = {globalStyles.container}>

      <Modal visible={modalOpen} animationType='slide'>
        <View style={globalStyles.modalContent}>
        <MaterialIcons 
          name='close'
          size={24}
          style={{...globalStyles.modalToggle, ...globalStyles.modalClose}}
          onPress={()=>setModalOpen(false)}
      />

          <Text>Starting with Modal :)</Text>
        </View>
      </Modal>

      <MaterialIcons 
        name='add'
        size={24}
        style={globalStyles.modalToggle}
        onPress={()=>setModalOpen(true)}
      />

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

