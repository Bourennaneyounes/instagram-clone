import React from 'react';
import { 
    SafeAreaView, View, Text
  } from 'react-native';


const DiscoverScreen = () => {
    return(
        
    <SafeAreaView>
        <View style={{backgroundColor : 'blue' , height : 500}}>
            <Text style={{textAlign :  'center' ,marginTop : 200,  color : 'white' , fontSize : 30}}>
                Discover
            </Text>
        </View>
    </SafeAreaView>
    );
}

export default DiscoverScreen;