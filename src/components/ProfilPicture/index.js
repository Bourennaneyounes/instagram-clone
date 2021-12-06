import React from 'react';
import {Image, View} from 'react-native'
import Styles from './styles'

const ProfilePicture = ({uri , size=70}) => {
    return(
        <View style={[Styles.container,{ width : size + 6, height : size + 6}]}>
            <Image 
            source={{ uri }}
            style={[Styles.image , {width : size , height : size}]}
            />
        </View>
           
    )
    }

export default ProfilePicture; 