import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container : {
        margin : 5,
        paddingTop : 5,
        paddingHorizontal : 5,
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    left : {
        flexDirection : 'row',
        width : 150,
        justifyContent : 'space-between'
        
    },
    right : {
        flexDirection : 'row',
        marginRight : 10,
    },
    // icons : {
    //     marginLeft : 20
    // },
    likes :{
        fontWeight : 'bold',
        margin : 3,
    },
    caption :{
        fontWeight : 'bold',
        margin : 3,
        
    },
    postedAt : {
        color : '#8c8c8c',
        margin : 3,
    }


});

export default Styles;