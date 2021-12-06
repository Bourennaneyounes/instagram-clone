import React from 'react';
import {Text ,  Image , View , TouchableOpacity} from 'react-native'
import logo from '../../assets/images/Instagram-Logo.png'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feathericons from 'react-native-vector-icons/Feather';

import Styles from './styles';
import Auth from './../../services/auth';
//import {Auth} from '../../services';
const Login = () => {

    

    return(
        <View style={Styles.container}>
            <View style={Styles.logo}>
               <Image source={logo} style={Styles.image} /> 
              
            </View>
            <View style={Styles.login}>
                <View style={Styles.facebookLoginArea} >
                <TouchableOpacity onPress={() => Auth.facebookLoginPress().then(() => console.log('Signed in with Facebook!'))}>
                <View style={Styles.facebookLogin} >
                        <MaterialIcons name="facebook" size={20} color='white' style={{marginRight : 10}}/>
                        <Text style={{color : 'white' ,  fontWeight : 'bold'}} >Continuer avec facebook</Text>
                    </View>
                </TouchableOpacity>

                    
                </View>
                <View style={Styles.emailAndMotpass}>
                    <View style={{flexDirection : 'row' , justifyContent : 'space-between' , alignItems :'center'}}>
                        <View style={{ height  : 0.5,width : 165 ,borderWidth: 0.5, borderColor: 'black' }}></View>
                        <View style={{marginHorizontal : 10}}>
                        <Text  style={{color : 'gray'}}>OU</Text>
                        </View>
                        <View style={{ height  : 0.5,width : 165 ,borderWidth: 0.5, borderColor: 'black' }}></View>
                    </View>
                    
                    <Text  style={{color : '#0095f6' , fontWeight : 'bold'}}>S'inscrire avec un e-mail ou un numéro de téléphone</Text>
                </View>
            </View>
          
          
          
        </View>
           
    )
    }

export default Login; 