
import React ,  { useContext } from 'react';

import HomeStackScreen from './home.routes'
import ProfileStackScreen from './profile.routes'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DiscoverScreen from '../screens/DiscoverScreen';
import PostScreen from '../screens/PostScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';

import Foundationicons from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feathericons from 'react-native-vector-icons/Feather';
import AntDesignicons from 'react-native-vector-icons/AntDesign';
import { ThemeContext } from '.';


const Tab = createBottomTabNavigator();

const BottomHomeNavigator = () => {

  const user = useContext(ThemeContext)
  //console.log(user);
    return(
      
      <ThemeContext.Provider value={user}>
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
        

          if (route.name === 'Home') {
            return <Foundationicons name="home" size={size} color={color} />;
          } else if (route.name === 'Discover') {
            return <Ionicons name="search" size={size} color={color} />;
           }else if(route.name === 'Post') {
            return <Feathericons name="plus-square" size={size} color={color} />;
          }else if(route.name === 'Notification'){
            return <AntDesignicons name="hearto" size={size} color={color} />;
          }else if(route.name === 'Profile'){
            //console.log(user);
            return <Ionicons name="person-outline" size={size} color={color} />;
          }

          // You can return any component that you like here!
          
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel : false,
        headerShown : false,  
        
        // headerTitleAlign : 'center'    
        
      })}>
              <Tab.Screen name="Home" component={HomeStackScreen} />
              <Tab.Screen name="Discover" component={DiscoverScreen} />
              <Tab.Screen name="Post" component={PostScreen} />
              <Tab.Screen name="Notification" component={NotificationScreen} />
              
              <Tab.Screen name="Profile" user={user} component={ProfileStackScreen} />
            </Tab.Navigator>
            </ThemeContext.Provider>
            )
}

export default BottomHomeNavigator;