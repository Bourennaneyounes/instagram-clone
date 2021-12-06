import React from 'react'; 
import { FlatList } from 'react-native';
import Styles from './styles';
import Story from '../UserStoryPreview';

import data from '../../data/Stories' 
const Stories = () => {
    return(
    <FlatList 
    data={data}
    keyExtrator={({user : {id}}) => id}
    horizontal
    showsHorizontalScrollIndicator = {false}
    style = {Styles.container}
    renderItem={({item}) => <Story story={item}/>}
    />

        // <Story imageUri={data[0].imageUri} name={data[0].name}/>
        // <Story imageUri={data[1].imageUri} name={data[1].name}/>
        // <Story imageUri={data[2].imageUri} name={data[2].name}/>
        // <Story imageUri={data[3].imageUri} name={data[3].name}/>
    
    )
}

export default Stories