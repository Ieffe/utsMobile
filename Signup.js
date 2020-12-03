import React, {Component} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
  } from 'react-native';
import auth from '@react-native-firebase/auth'


export default class Signup extends Component{
    constructor() {
      super();
      this.state = {
        email: '',
        password: ''
      }
    }
  
    handleChangeInput = field => text => {
      this.setState({[field]: text})
    }
  
    handleOnSubmit = async () => {
      const {email, password} = this.state;
      auth().createUserWithEmailAndPassword(email, password);
      this.props.navigation.navigate('Home')
    }
    render(){
      return(
        <View
          style={styles.containerForms}
        >
          <TextInput
          placeholder='Insert new E-mail'
          placeholderTextColor='white'
          style={styles.inputs}
          onChangeText={this.handleChangeInput('email')}
          
          />
          <TextInput
          placeholder='Insert new password'
          placeholderTextColor='white'
          secureTextEntry={true}
          style={styles.inputs}
          onChangeText={this.handleChangeInput('password')}
          />
  
          <TouchableOpacity 
            onPress={this.handleOnSubmit}
            style={styles.buttonsConfirm}
          >
            <Text 
              style={styles.buttonTextConfirm}
            >
              Sign-up
            </Text>
          </TouchableOpacity>
        </View>      
      )
    }
}

const styles = StyleSheet.create({
    inputs: {
      borderRadius: 30,
      color: 'white',
      paddingHorizontal: 16,
      backgroundColor: '#ff5c4a',
      marginVertical: 15,
      fontSize: 16,
      width: 250,
      fontFamily: 'Arial'
    },
    buttonsConfirm: {
      width: 250,
      borderRadius: 25,
      backgroundColor: '#00d600',
      marginVertical: 15,
      paddingVertical: 10,
      paddingHorizontal: 16,
      fontSize: 16
    },
    buttonMenu: {
      width: 150,
      borderRadius: 25,
      backgroundColor: '#0f83ff',
      marginVertical: 15,
      paddingVertical: 10,
      paddingHorizontal: 16,
      fontSize: 16
    },
    buttonBack: {
      width: 100,
      borderRadius: 25,
      backgroundColor: '#ff5c4a',
      marginVertical: 15,
      paddingVertical: 10,
      paddingHorizontal: 16,
      fontSize: 16
    },
    buttonText: {
      textAlign: "center",
      color: "white"
    },
    buttonTextConfirm: {
      textAlign: "center",
      color: "white"
    },
    container: {
      flex: 1,
      backgroundColor: '#36454f',
      alignItems: 'center',
      justifyContent: 'center'
    },
    containerForms: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#36454f'
    },
    loginText:{
      color: 'white',
      fontSize: 12,
      marginBottom: 30
    },
    loginTextTitle:{
      color: 'white',
      fontSize: 60
    },
    loginNewAccountContainer:{
      marginVertical: 50
    },
    loginNewAccountText:{
      color: 'white',
      fontSize: 14,
      textDecorationLine: 'underline'
    },
    contentHeadTitle:{
      color: 'white',
      fontSize: 32
    },
    contentHeadSubtitle:{
      color: 'white',
      fontSize: 16
    }
  })
  