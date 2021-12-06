import { useNavigation, useRoute } from '@react-navigation/native';
import React , { useState,useEffect } from 'react'
import { ActivityIndicator, SafeAreaView, Text,Image, View,ImageBackground, TouchableOpacity, Dimensions, TouchableWithoutFeedback, TextInput } from 'react-native';
import Styles from './styles';
import Stories from '../../data/Stories';

import dataStories from '../../data/Stories'
import ProfilePicture from '../../components/ProfilPicture';
import Feathericons from 'react-native-vector-icons/Feather';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

const StoryScreen = () => {

    const [userStories,setUserStories] = useState(null);
   
    const [activeStory,setActiveStory] = useState(null);
    const [activeStoryIndex,setActiveStoryIndex] = useState(null);
    const navigation = useNavigation();
    const route = useRoute();
    const UserId = route.params.userId;
    
  useEffect(() => {
 
    
    const userStories = dataStories.find(stories => stories.user.id===UserId)
    setUserStories(userStories)
    setActiveStoryIndex(0);

  },[])
 
  useEffect(()=>{


    if(activeStoryIndex<0){
        setActiveStoryIndex(0)
    }
    if(userStories && activeStoryIndex>=userStories.stories.length){
     
        setActiveStoryIndex(userStories.stories.length-1)
    }
 
  })
  useEffect(()=>{
    
      if(userStories && userStories.stories.length-1>=activeStoryIndex && activeStoryIndex>=0){
        setActiveStory(userStories.stories[activeStoryIndex].imageUri);
       
      } 
      
  },[activeStoryIndex])
   

const navigateToNextUser = () => {
    navigation.push("Story", {userId : (parseInt(UserId)+1) })

}

const navigateToPrevUser = () => {
    navigation.push("Story", {userId : (parseInt(UserId)-1) })
}

const handleNextStory = () => {
    if (activeStoryIndex >= userStories.stories.length - 1) {
       navigateToNextUser()
     
        return;
    }
    setActiveStoryIndex(activeStoryIndex + 1);
  }

  const handlePrevStory = () => {
    if (activeStoryIndex <= 0) {
      navigateToPrevUser()
    
        return;
    }
    setActiveStoryIndex(activeStoryIndex - 1);
  }

  const  handlePress = (evt)=> {
      if(evt.nativeEvent.locationX<Dimensions.get('window').width/2 ){
        handlePrevStory();
       
      }else{
         handleNextStory();
        
      }
        
   }
   if (!userStories) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    )
  }
  
  
        return(
           
            <SafeAreaView style={Styles.container}>
             
                <TouchableWithoutFeedback style={Styles.container} onPress={handlePress}>
                  
                    <ImageBackground source={{uri : activeStory}} style={Styles.image }>
                        <View style={Styles.userInfo}>
                            <ProfilePicture uri={userStories.user.imageUri } size={50}  />
                            <View style={{justifyContent : 'space-between'}}>
                            <Text style={Styles.userName}>{userStories.user.name}</Text>
                            <Text style={Styles.postedTime}>{userStories.stories[activeStoryIndex].postedTime}</Text>
                            </View>
                            
                        </View>
                        <View style={Styles.userInput}>
                        <Feathericons name="camera" size={30} color='white' style={{marginLeft : 10}}/>
                        <TextInput style={Styles.textInput} placeholder="send message" placeholderTextColor="#fff"/>
                        <IoniconsIcon name="paper-plane-outline" size={30} color={"#ffffff"} style={{marginRight : 10}}/>
                        </View>
                    
                    
                    </ImageBackground>
             
                </TouchableWithoutFeedback>
             
                
                
            </SafeAreaView>
)
}

export default StoryScreen;