import React from "react";
import { StyleSheet,Text,View, Image,ImageBackground } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({navigation,title}){
  const openMenu = () => {
    navigation.openDrawer();
  }
  return(
    <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
      <MaterialIcons name='menu' size={24} onPress={openMenu} style={styles.icon} />
      <View style={styles.headerTitle}>
        <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  header: {
    width:'110%',
    height:'200%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    resizeMode:'stretch'
  },
  headerText: {
    fontWeight:'bold',
    fontSize:20,
    color:'#333',
    letterSpacing:1,
  },
  icon: {
    position:'absolute',
    left:16,
  },
  headerImage:{
    width:24,
    height:24,
    marginStart:0,
    marginHorizontal:5,
    marginTop:3,
  },
  headerTitle:{
    flexDirection:'row',
  }
})

// options={({navigation})=>{return {headerTitle:()=> <Header navigation={navigation} title='GameZone'/>}}}