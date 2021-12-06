/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React , {useState , useEffect}  from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/routers';
import auth from '@react-native-firebase/auth';
//import { LoginManager, AccessToken } from 'react-native-fbsdk-next';


import { 
  StatusBar,
  View,
  Text
} from 'react-native';
import Login from './src/components/Login';


const App = () => {
  
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  //////////////////////////////
 
 
  //console.log(user)
  //////////////////////////////
  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;


  if (!user) {
    return (
      <View>
      <Login/>
    </View>
    );
  }

  
    return (
      <NavigationContainer>
         <StatusBar barStyle= 'dark-content' />
           <Router user={user}/>   
     </NavigationContainer>
    );
  


  }
  




export default App;
