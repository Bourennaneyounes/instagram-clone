import React , {useContext} from 'react';
import { 
    SafeAreaView, View, Text, useWindowDimensions,Image,FlatList, ScrollView
  } from 'react-native';
import ProfileHead from '../../components/profile/profile-head';
import Styles from './styles';
import { ThemeContext } from '../../routers';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import Feathericons from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import iconFocused from '../../assets/images/favicon-focused.jpg'
import icon from '../../assets/images/favicon.jpg'
import iconInstagramTag from '../../assets/images/instagram-tag.png'
import iconInstagramTagUnfocused from '../../assets/images/instagram-tag-unfocused.png'
import ProfileBody from '../../components/profile/profile-body';
import posts from '../../components/feed/posts';



//import posts from 

const ProfileScreen = () => {
  
  //////////////////////////////////
  //console.log(posts[0].postImage)
    const user = useContext(ThemeContext)

    /////////////////////////////////////////////////////////////////////////////////////////
    const FirstRoute = () => (
      //<View style={{ flex: 1, backgroundColor: '#673ab7' }} />
      <FlatList
      
      numColumns = {3}
      horizontal = {false}
      data = {posts}
      keyExtrator={(item,key) => key.toString()}
      renderItem={({item}) => <ProfileBody post={item}/>}
     // ListHeaderComponent={() => <ProfileHead user={user}/>}
      />
      );
      
      const SecondRoute = () => (
        <FlatList
      numColumns = {3}
      horizontal = {false}
      data = {posts}
      keyExtrator={(item,key) => key.toString()}
      renderItem={({item}) => <ProfileBody post={item}/>}
      //ListHeaderComponent={Stories}
      />
      );
    
      const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
      });
    
    ////////////////////////////////////////////////////////////////////////////////////////
   // console.log('user :')
   // console.log(user)
   const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first' },
    { key: 'second' },
  ]);
    
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'black' }}
      style={{ backgroundColor: 'white' }}
      
      renderIcon={({ route, focused, color }) => (
       //( focused) ? color='black' : color='grey'
        (route.key === 'first') ?       
            (focused) ?
                <Image
                source={iconFocused}
                 //name={focused ? 'camera' : 'shopping-cart'}
                 style={{ width : 40, height : 40 ,marginTop : 10}}
                  //size={10}
                 /> :
                 <Image
                  source={icon}
                  //name={focused ? 'camera' : 'shopping-cart'}
                  style={{  width : 40, height : 40 ,marginTop : 10}}
                  //size={10}
                  />
        
         :
        
         (focused) ?
                <Image
                source={iconInstagramTag}
                 //name={focused ? 'camera' : 'shopping-cart'}
                 style={{ width : 25, height : 25 , marginBottom:10 ,marginTop : 10}}
                  //size={10}
                 /> :
                 <Image
                  source={iconInstagramTagUnfocused}
                  //name={focused ? 'camera' : 'shopping-cart'}
                  style={{ width : 25, height : 25 , marginBottom:10 ,marginTop : 10}}
                  //size={10}
                  />

      )}
  
      
    />
  );
  
    return(
        
    <SafeAreaView>
      
        <View style={Styles.container}>
          <View style={Styles.profileHead}>
         
                <ProfileHead user={user}/>
            
          </View>
            
            <View style={Styles.body}>
            <TabView
                renderTabBar={renderTabBar}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
            />
            </View>
            
        </View>
        
    </SafeAreaView>
    );
}

export default ProfileScreen;