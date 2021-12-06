import React from 'react';
import {Text, View} from 'react-native'
import ProfilePicture from '../../../ProfilPicture';
import Styles from './styles';
import Icon from 'react-native-vector-icons/Entypo';


const Header = ({imageUri,name}) => {
    return(
        <View style={Styles.container}>
            <View style = {Styles.left}>
                <ProfilePicture uri={imageUri} size={40}/>
                <Text style={Styles.name}>{name}</Text>
            </View>
            <View style = {Styles.right}>
                <Icon name="dots-three-vertical" size={18} color="#4c4c4c" />
            </View>
            
            
        </View>
         );
        
}

export default Header;