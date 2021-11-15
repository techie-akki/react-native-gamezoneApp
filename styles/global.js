import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex:1,
    padding:24,
  },
  titleText: {
    fontFamily: 'nunito-bold',
    fontSize:20,
    color:'#333',
    lineHeight:30,
  },
  paragrapgh: {
    marginVertical:8,
    lineHeight:20,
  },
  // review screen image
  rating:{
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:16,
    marginTop:16,
    borderTopColor:'#ddd',
    borderTopWidth:1,
  },
  reviewText:{
    fontFamily:'nunito-regular',
    fontSize: 18,
    lineHeight:20,
    color:'#333',
    marginTop:10,
  },
  // Modal
  modalToggle: {
    marginBottom:10,
    borderWidth:1,
    borderColor:'#ddd',
    padding:10,
    borderRadius:10,
    alignSelf:'center',
  },
  modalClose:{
    marginTop:20,
    marginBottom:0,
  },
  modalContent:{
    flex:1,
  },
  //Formikform
  input: {
    borderWidth:1,
    borderColor:'#ddd',
    padding:10,
    borderRadius:6,
    fontSize:18,
    marginBottom:5,
  },
  
});

export const images ={
  ratings:{
    '1': require('../assets/rating-1.png'),
    '2': require('../assets/rating-2.png'),
    '3': require('../assets/rating-3.png'),
    '4': require('../assets/rating-4.png'),
    '5': require('../assets/rating-5.png'),
  }
};