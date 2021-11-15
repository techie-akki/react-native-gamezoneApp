import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import * as Font from 'expo-font';
import Home from './screens/home';
import Review from './screens/review';
import About from './screens/about';
import Header from './shared/header';
import AppLoading from 'expo-app-loading' ;


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="GameZone"
    screenOptions={screenOptionsStyle}
    
    >
      <Stack.Screen name="GameZone" component={Home} />
      <Stack.Screen name="Review" component={Review}  />
    </Stack.Navigator>
  );
}
const Drawer = createDrawerNavigator();



const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
});



export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return (
      // <Home />
      <NavigationContainer>
        <Drawer.Navigator 
        screenOptions={screenOptionsStyle}>
          <Drawer.Screen name ='Home' component={HomeStack} options={{headerShown:false }} />
          <Drawer.Screen name ='About' component={About}  />
        </Drawer.Navigator>
      </NavigationContainer>
       
    );
  } else {
   return (
    <AppLoading
      startAsync = {getFonts}
      onFinish= {()=> setFontsLoaded(true)}
      onError= {()=> console.log('error')}
    />
   )
  }

  
}

const screenOptionsStyle ={
  headerStyle: {
    backgroundColor: '#ddd',
    
  },
  headerTintColor: '#444',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize:24,
    fontFamily:'nunito-regular',
    color:'#444'
  },
  headerTitleAlign:'center'
}