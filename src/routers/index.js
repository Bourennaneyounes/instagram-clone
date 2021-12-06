
import React from 'react';

import BottomHomeNavigator from './BottomTabNavigator.routes';
import StoryScreen from '../screens/StoryScreen';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';

// export const RootStackProps = {
//     user : undefined
// }
const RootStack = createStackNavigator();

export const ThemeContext = React.createContext();

const router = ({user}) => {


   // console.log(user)
   //const {userLoged} = this.props
    return(
        <ThemeContext.Provider value={user}>
 <RootStack.Navigator >
     
        <RootStack.Screen
        name={"Home"}
        //user={user}
        // {user => <HomeScreen {...props} user={user} />}
        component={BottomHomeNavigator}
        options={() => ({
            headerShown : false,
          
            
        })}
       
        />
     
     
     <RootStack.Screen
     name={"Story"}
     component={StoryScreen}
     options={{
         headerShown : false
     }}
     />
    
 </RootStack.Navigator>
 </ThemeContext.Provider>
  
            )
}

export default router;