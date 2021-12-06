import React from 'react';
import { 
    SafeAreaView, View, Text
  } from 'react-native';


const NotificationScreen = () => {
    return(
        
    <SafeAreaView>
        <View style={{backgroundColor : 'red' , height : 500}}>
            <Text style={{textAlign :  'center' ,marginTop : 200,  color : 'white' , fontSize : 30}}>
                Notification
            </Text>
        </View>
    </SafeAreaView>
    );
}

export default NotificationScreen;