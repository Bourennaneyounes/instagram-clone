import React, { useState,useEffect } from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native'
import Styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
const Footer = ({ likes : likesCount , caption , postedAt}) => {
 
   const [isLiked,setIsLiked] = useState(false)
   const [likes,setLikesCount] = useState(0)

   const onLikePressed = () => {
        
        const amount = isLiked ? -1 : 1
        setLikesCount(likes + amount)

        setIsLiked(!isLiked);
        
   }


    useEffect(() => {
        setLikesCount(likesCount)
    },[])
   
    return(
        
        <View>
                <View style={Styles.container}>
                    <View style={Styles.left}>
                        <TouchableWithoutFeedback onPress={onLikePressed} >
                            {
                                
                                isLiked ?
                                
                                <Icon  name="heart" size={30} color="red"/>
                                :  <Icon  name="hearto" size={30} color="black" />
                            }
                            
                        </TouchableWithoutFeedback>
                        
                        <FontistoIcon  name="comment" size={30} color={"#000000"}/>
                        <IoniconsIcon name="paper-plane-outline" size={30} color={"#000000"}/>
                    </View>
                    <View style={Styles.right}>
                        <FontAwesomeIcon name="bookmark-o" size={30} color={"#000000"}/> 
                    </View>
                </View>
                    <Text style={Styles.likes}>{likes} Likes</Text>
                    <Text style={Styles.caption}>{caption}</Text>
                     <Text style={Styles.postedAt}>{postedAt}</Text>
        </View>
        
    );
}

export default Footer;