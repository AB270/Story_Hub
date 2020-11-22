import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';



export default class ReadStoryScreen extends React.Component {
  render(){
    return(
      <View style={{justifyContent:"center",backgroundColor:'#000000'}}>
         <Text style={{color:'#1338BE',flex:1,justifyContent:'center',alignItems: 'center',}}>Read stories written by others!</Text>
         </View>
    );
  }
}
