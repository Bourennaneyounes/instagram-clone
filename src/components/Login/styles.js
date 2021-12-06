import { StyleSheet, Dimensions } from 'react-native';

const Styles = StyleSheet.create({
    container :{
       // flex : 1,
     //   flexDirection : 'column',
        height : Dimensions.get('window').height,
        width : Dimensions.get('window').width,
        //justifyContent : 'space-between'
        

},
logo : {
    flex : 1,
    // backgroundColor : 'yellow',
     justifyContent: "center",
     alignItems: "center",
},
image : {
    width : 200 ,
     height : 100
   // resizeMode : 'contain' ,
   //size : 70
  //  width : 10,
  //  height : 100
},
login : {
    flex : 1
},
facebookLogin : {
    justifyContent : 'center',
    //alignItems : 'center',
    flexDirection : 'row',
    backgroundColor : '#0095f6',
    color : 'white',
   // fontSize : 20,
    resizeMode : 'contain',
    //marginHorizontal : 3,
    //borderWidth : 0.5,
    paddingVertical : 10,
    paddingHorizontal : 45,
    borderRadius : 5,
    width : '99%'
   // borderColor : 'black',
},
facebookLoginArea  : {
    flex : 3,
    marginHorizontal : 10,
   // backgroundColor : 'red',
   
    justifyContent: "center",
     alignItems: "center"
},

emailAndMotpass : {
    marginTop : 10,
    flex : 6,
    marginHorizontal : 10,
    //justifyContent: 'space-between',
    alignItems: "center"
}


});

export default Styles;