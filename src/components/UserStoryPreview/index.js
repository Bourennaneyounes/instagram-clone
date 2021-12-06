import React from 'react'; 
import { View , Text , TouchableOpacity  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProfilePicture from '../ProfilPicture';
import Styles from './styles'



const Story = (props) =>{

 
  
    const {
        story : {
            user : {
                id,
                imageUri,
                name
            },
            
        },
        stories
    } = props;
console.log("*******************")
//console.log(stories)
    

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate("Story", {userId : id })
        
    }

    return(
    <TouchableOpacity onPress={onPress}>
        <ProfilePicture uri={imageUri}/>
        <Text style={Styles.name}> {name} </Text>
    </TouchableOpacity>
    )
}

export default Story;