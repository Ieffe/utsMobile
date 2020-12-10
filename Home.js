import React, {Component} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
  } from 'react-native';
import auth from '@react-native-firebase/auth'
import firestore from'@react-native-firebase/firestore'


export default class Home extends Component{
    constructor(){
        super()
        this.state = {
          title: '',
          description: ''
        }
    }

    handleTextInput = field => text => {
      this.setState({[field] : text})
    }

    handlePost = () => {
      firestore.collection('posts').add(this.state);
      this.setState({
        title: '',
        description: ''
      })
    }

    render(){
      return(
      <View
        style={styles.container}
      >
        <Text 
          style={styles.contentHeadTitle}
        >
          RPN Home
        </Text>
        <Text
          style={styles.contentHeadSubtitle}
        >
          This is the Home Screen 
        </Text>
        <TextInput
          placeholder='Title'
          onChangeText={this.handleTextInput('title')}
          value = {this.state.title}
        />
        <TextInput
          placeholder='Description'
          onChangeText={this.handleTextInput('description')}
          value = {this.state.description}
        />
        <TouchableOpacity
          onPress={this.handlePost}
        >
            <Text>
              Save
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style = {styles.buttonMenu}
          onPress={() => navigation.navigate('About')}
        >
          <Text
            style = {styles.buttonText}
          > 
            About this Apps 
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style = {styles.buttonBack}
          onPress={() => auth().signOut().then(() => navigation.navigate('Login'))}
        >
          <Text
            style = {styles.buttonText}
          > 
            Log out 
          </Text>
        </TouchableOpacity>
      </View>  
      )

    }
}

