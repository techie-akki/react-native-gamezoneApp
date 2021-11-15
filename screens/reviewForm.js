import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";

export default function ReviewForm({addReview}){

  return(
    <View style={globalStyles.container}>
      <Formik
        initialValues={{title: '', body: '', rating: ''}}  //fields & initial value of the fields
        onSubmit={(values,actions)=>{
          actions.resetForm();
          addReview(values);
        }}
      >
        {(props)=>(
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Review Title'
              onChangeText={props.handleChange('title')}
              value={props.values.title}
            />
            <TextInput
              style={globalStyles.input}
              placeholder='Review body'
              onChangeText={props.handleChange('body')}
              value={props.values.body}
            />
            <TextInput
              style={globalStyles.input}
              placeholder='Review (1-5)'
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType='numeric'
            />

            <Button title='submit' color='maroon' onPress={props.handleSubmit} />

          </View>
        )}
      </Formik>
    </View>
  )
}