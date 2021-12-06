import React from "react";
import { FlatList } from "react-native";
import Post from "../Post";
import Stories from '../UserStoriesPreview';
import posts from "./posts";
//const posts = posts

const Feed = () => {
return(
    <FlatList
    data = {posts}
    keyExtrator={({key}) => key}
    renderItem={({item}) => <Post post={item}/>}
    ListHeaderComponent={Stories}
    />

);
}

export default Feed;