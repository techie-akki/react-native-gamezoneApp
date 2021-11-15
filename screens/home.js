import React, { useState } from "react";
import {View, Text, TouchableOpacity, FlatList, Modal,TouchableWithoutFeedback, Touchable, Keyboard} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from "./reviewForm";

export default function Home({navigation}){
  const [modalOpen,setModalOpen] = useState(false);

  const [reviews,setReviews] = useState([
    {title: 'Mangalam, Fragrance of rose', rating:5, body:'This incense sticks fragrance is awesome!',key:'1'},
    {title: 'Not so "Final" fantasy', rating:4, body:'Worst Functionality ever:(',key:'2'},
    {title: 'Gotta catch them all (again)', rating:3, body:'This deo is a good choice gonna try other variants.',key:'3'},
  ]);
 
  const addReview =(review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return[review, ...currentReviews]
    });
    setModalOpen(false);
  }

  return (
    <View style = {globalStyles.container}>

      <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={globalStyles.modalContent}>
          <MaterialIcons 
            name='close'
            size={24}
            style={{...globalStyles.modalToggle, ...globalStyles.modalClose}}
            onPress={()=>setModalOpen(false)}
          />
          <ReviewForm addReview={addReview}/>
          </View>
        </TouchableWithoutFeedback>
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

