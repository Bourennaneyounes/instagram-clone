import React from 'react';
import { View } from 'react-native';
import Header  from './Post-compoents/Header';
import Body from './Post-compoents/Body';
import Footer from './Post-compoents/Footer';

const Post = ({post : {user , postImage , likes , caption , postedAt}}) => {
    return(
            <View>
                <Header imageUri={user.imageUri} name={user.name}/>
                <Body imageUri={postImage}/>
                <Footer likes={likes} caption={caption} postedAt={postedAt}/>
            </View>
    );

}

export default Post;