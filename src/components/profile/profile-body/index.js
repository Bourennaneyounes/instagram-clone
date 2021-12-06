import React from 'react';
import {Text, View} from 'react-native'
import ProfileBodyPost from './profile-body-post';

import Styles from './styles';



const ProfileBody = ({post : {postImage}}) => {
    return(
        <ProfileBodyPost imageUri={postImage}/>
         );
        
}

export default ProfileBody;