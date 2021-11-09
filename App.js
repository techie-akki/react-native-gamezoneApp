import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import * as Font from 'expo-font';
import Home from './screens/home';
import Review from './screens/review';
import AppLoading from 'expo-app-loading' ;

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
});

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return (
      // <Home />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ccc',
          },
          headerTintColor: '#444',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
          <Stack.Screen name ='Home' component={Home} options={{ title: 'GameZone'}} />
          <Stack.Screen name ='Review' component={Review} />
        </Stack.Navigator>
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

