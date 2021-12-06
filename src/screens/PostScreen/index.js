import React from 'react';
import { 
    SafeAreaView, View, Text
  } from 'react-native';


const PostScreen = () => {
    return(
        
    <SafeAreaView>
        <View style={{backgroundColor : 'green' , height : 500}}>
            <Text style={{textAlign :  'center' ,marginTop : 200,  color : 'white' , fontSize : 30}}>
                Post
            </Text>
        </View>
    </SafeAreaView>
    );
}

export default PostScreen;