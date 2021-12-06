import React from 'react';
import {Image, View,Text} from 'react-native'
import ProfilePicture from '../../ProfilPicture';
import Styles from './styles'


const ProfileHead = ({user}) => {
    return(
        <View style={Styles.container}>
            <View style={Styles.profileInfo}>
                <ProfilePicture size={80} uri={user.photoURL}/>
           
                    <View >
                    <Text style={{textAlign :  'center' ,  color : 'black' , fontSize : 15 , fontWeight : 'bold'}}>
                            23 
                            </Text>
                            <Text style={{textAlign :  'center' ,  color : 'black' , fontSize : 15 }}>
                                Publication 
                            </Text>
                    </View>
                    <View>
                    <Text style={{textAlign :  'center' ,  color : 'black' , fontSize : 15 , fontWeight : 'bold'}}>
                                76
                            </Text>
                            <Text style={{textAlign :  'center' ,  color : 'black' , fontSize : 15 }}>
                                Abonnée
                            </Text>
                    </View>
                    <View style={{marginRight : 20}}>
                    <Text style={{textAlign :  'center' ,  color : 'black' , fontSize : 15 , fontWeight : 'bold'}}>
                                90
                            </Text>
                            <Text style={{textAlign :  'center' ,  color : 'black' , fontSize : 15 }}>
                                Abonnnement
                            </Text>
                    </View>
            </View>
            <View style={Styles.button}>
            <Text style={{textAlign :  'center' ,  color : 'black' , fontSize : 15 , fontWeight :'bold'}}>
                                Modifier profil
                            </Text>
            </View>
          
        
        
    </View>
           
    )
    }

export default ProfileHead; 