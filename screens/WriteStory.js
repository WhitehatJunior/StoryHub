import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import * as firebase from 'firebase';
import db from '../config.js';
export default class WriteStory extends React.Component {
  constructor(){
    super();
    this.state={
      title:"",
      author:"",
      story:""
    }
  }
  submitStory = async () =>{
      //add
      db.collection("stories").add({
        title: this.state.title,
        author: this.state.author,
        story: this.state.story
      });
      this.setState({
        title:"",
        author:"",
        story:""
      })
      ToastAndroid.show("Story Submitted", ToastAndroid.SHORT)
  }
  render(){
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Title..." 
            placeholderTextColor="#003f5c"
            value={this.state.title}
            onChangeText={text => this.setState({title:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Author..." 
            placeholderTextColor="#003f5c"
            value={this.state.author}
            onChangeText={text => this.setState({author:text})}/>
        </View>
        <View style={styles.mainInputView} >
          <TextInput  
            style={styles.mainInputText}
            placeholder="Story..." 
            value={this.state.story}
            placeholderTextColor="#003f5c"
            multiline={true}
            onChangeText={text => this.setState({story:text})}/>
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={this.submitStory}>
          <Text style={styles.loginText}>SUBMIT</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  mainInputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:326,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  mainInputText:{
    height:326,
    color:"white"
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});