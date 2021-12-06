import React from 'react';
import {Text, View,Image} from 'react-native'

import Styles from './styles';



const ProfileBodyPost = ({imageUri}) => {
    return(
       // <View style={{ flex: 1, backgroundColor: 'yellow' }}>
            <Image 
        source = {{ uri :imageUri}}
        style = {Styles.image}
        /> 
            
       // </View>
         );
        
}

export default ProfileBodyPost;