import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container : {
       //backgroundColor : 'white',
        flex : 1 ,
       //flexDirection : 'column',
      //  alignItems : 'center',
        //justifyContent : 'space-between'
        
    },
    profileInfo : {
        flex : 1.5 ,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between'
    },
    button  : {
        flex:0.4,
        //height : '5',
       // alignItems:'center',
        justifyContent : 'center',
        height : 10,
        borderColor :'#ccc',
        borderWidth : 1,
        borderRadius : 4,
        marginHorizontal : 7,
        marginBottom : 10
        //alignItems : 'center',
        //backgroundColor : 'yellow'
    }
}
);

export default Styles;
