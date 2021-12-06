import React  from 'react';


import HomeScreen from '../screens/HomeScreen';

import { createStackNavigator } from '@react-navigation/stack';
import logo from '../assets/images/Instagram-Logo.png'
import Feathericons from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { 
    Image, TouchableOpacity
  } from 'react-native';

  import Auth from '../services/auth';




const HomeStack = createStackNavigator();

const HomeRoutes = () => {
    return(

    
    <HomeStack.Navigator >
    <HomeStack.Screen 
    name="Home" 
    component={HomeScreen}
    options={
      {
        title : 'Instagram',
        headerTitleAlign : 'center' ,
        cardStyle: {
          backgroundColor: 'white',
        },
   
  headerLeft : () => (
    <TouchableOpacity onPress={() => Auth.facebookSignOut()}>
      <Feathericons name="camera" size={30} color='black' style={{marginLeft : 10}}/>
    </TouchableOpacity>
    
  ),
  headerRight : () => (
    <Ionicons name="paper-plane-outline" size={30} color={"#000000"} style={{marginRight : 10}}/>
  ),
  headerTitle : () => (
  <Image source={logo} resizeMode="contain" style={{width : 135}}/>  
  )
}
  }
    />
  

    
  </HomeStack.Navigator>
    )
}

export default HomeRoutes;