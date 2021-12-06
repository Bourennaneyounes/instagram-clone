import { StyleSheet, Dimensions } from 'react-native';

const Styles = StyleSheet.create({
    
   image : {
       margin : 2,
       width :  Dimensions.get('window').width/3-2,
       height : Dimensions.get('window').width/3-2,
       resizeMode : 'cover'
   }


});

export default Styles;