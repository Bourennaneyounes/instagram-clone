import { transform } from '@babel/core';
import { StyleSheet, Dimensions } from 'react-native';

const Styles = StyleSheet.create({
   image : {
       width :  Dimensions.get('window').width,
       height : Dimensions.get('window').width,
       resizeMode : 'contain',
      //alignSelf: 'center',
   }


});

export default Styles;