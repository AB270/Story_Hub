import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class WriteStoryScreen extends React.Component{
  constructor(){
    super();
    this.state = {
       storyAuthor:'',
       storyTitle:'',
       story:''
    }
  }

  submitStory = async()=>{
    //Author
    db.collection("author").add({
     'author':this.state.storyAuthor
    })
    //Story Title
    db.collection("title").add({
      'title': this.state.storyTitle
    })
    //Story
    db.collection("story").add({
      'story': this.state.story
    })

    alert("Story Submitted!")

    this.setState({
      storyAuthor:'',
      storyTitle:'',
      story:''
    })
  }

  render(){
    return(
      <View style = {styles.container}>
        
        <TextInput
         onChangeText={text => {
          this.setState({
            storyTitle:text,
            
          });
        }}
          style = {styles.inputBoxA}
          placeholder = 'Story Title'
          value = {this.state.storyTitle}
        />
        <TextInput
           onChangeText={text => {
            this.setState({
              storyAuthor:text,
              
            });
          }}
          style = {styles.inputBoxB}
          placeholder = 'Author'
          value = {this.state.storyAuthor}
        />
        <TextInput
           onChangeText={text => {
            this.setState({
              story:text,
              
            });
          }}
          style = {styles.inputBoxC}
          placeholder = 'Story'
          value = {this.state.story}
        />
        <TouchableOpacity style = {styles.submitButton} onPress ={this.submitStory}>
          <Text style = {styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor:'#000000'
  },
  inputBoxA:{
    width: 1000,
    height: 40,
    borderWidth: 1.5,
    borderRightWidth: 1.5,
    fontSize: 20,
    marginBottom:100,
    borderColor:'#1338BE',
    color:'#1338BE'
  },
  inputBoxB:{
      width: 1000,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 1.5,
      fontSize: 20,
      marginBottom:100,
      borderColor:'#1338BE',
      color:'#1338BE'
  },
  inputBoxC:{
    width: 1000,
    height: 250,
    borderWidth: 1.5,
    borderRightWidth: 1.0,
    fontSize: 20,
    marginBottom:100,
    borderColor:'#1338BE',
    color:'#1338BE'
  },
  buttonText : {
    fontSize : 20,
    color:'#1338BE'
  }
});