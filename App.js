/*
 *Story Hub Complete
 *
*/

import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';
import LoginScreen from './screens/LoginScreen';

export default class App extends React.Component{
  render(){
    return <AppContainer/>;
  }
}

const TabNavigator = createBottomTabNavigator({
  Read : {screen: ReadStoryScreen},
  Write : {screen : WriteStoryScreen},
},
{
  defaultNavigationOptions : ({navigation})=>({
    tabBarIcon : ()=>{
      
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "Read"){
        return(
          <Image
            source = {require("./assets/read.png")}
            style = {{width : 40, height : 40}}
          />
        )
      }

      else if(routeName === "Write"){
        return(
          <Image
            source = {require("./assets/write.png")}
            style = {{width : 40, height : 40}}
          />
        )
      }
    }
  })
}
);
const switchNavigator = createSwitchNavigator ({
  LoginScreen:{screen:LoginScreen},
  TabNavigator:{screen:TabNavigator}
  
})
const AppContainer = createAppContainer(switchNavigator);


const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : "#000000",
    alignItems : "center",
    justifyContent : "center"
  }
});