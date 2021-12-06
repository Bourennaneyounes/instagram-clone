import React, { useContext }  from 'react';


import ProfileScreen from '../screens/ProfileScreen';

import { createStackNavigator } from '@react-navigation/stack';
import logo from '../assets/images/Instagram-Logo.png'
import Feathericons from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { 
    Image, TouchableOpacity, View, Text
  } from 'react-native';

  import Auth from '../services/auth';
import { ThemeContext } from '.';




const ProfileStack = createStackNavigator();

const ProfileRoutes = () => {
    const user = useContext(ThemeContext)
    //console.log(user);
    return(

      <ThemeContext.Provider value={user}>
    <ProfileStack.Navigator >
    <ProfileStack.Screen 
    name="Profile" 
    component={ProfileScreen}
    options={
      {
        title : 'Instagram',
        headerTitleAlign : 'center' ,
        cardStyle: {
          backgroundColor: 'white',
        },
        //headerTitle : false,
  headerLeft : () => (
    <View style={{flexDirection : 'row' , justifyContent : 'center' , alignItems : 'center'}}>
        <Ionicons name="lock-closed-outline" size={15} color={"#333333"} style={{marginLeft : 55 , marginRight : 5}}/>
        <Text style={{fontWeight : 'bold' , fontSize : 20, fontFamily :''}}>{user.displayName}</Text>
        <EvilIcons name="chevron-down" size={20} color={"#333333"} style={{marginLeft : 2 , marginRight : 5}} />
    </View>
      
    
    
  ),
  headerRight : () => (
    <View style={{flexDirection : 'row' , justifyContent : 'center' , alignItems : 'center'}}>
        <Feathericons name="plus-square" size={30} color={"#333333"} />
        <FontAwesome5 name="bars" size={30} color={'#333333'} style={{marginRight : 15 , marginLeft : 20}}/>
        
      </View>
    
  ),
  headerTitle : () => (
      <Text></Text>
  //<Image source={logo} resizeMode="contain" style={{width : 135}}/>  
  )
}
  }
    />
  

    
  </ProfileStack.Navigator>
  </ThemeContext.Provider>
    )
}

export default ProfileRoutes;