/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function loginScreen({navigation}){
  return(
    <View
    style={styles.containerForms}
    >
      <Text
        style={styles.loginTextTitle}
      >
        RPN
      </Text>
      <Text
        style={styles.loginText}
      >
        The Roleplay Network
      </Text>
      <TextInput
        placeholder='E-mail'
        keyboardType='email-address'
        placeholderTextColor='white'
        style={styles.inputs}
      />

      <TextInput 
        placeholder='Password'
        placeholderTextColor='white'
        secureTextEntry={true}
        style={styles.inputs}
      />

      <TouchableOpacity
        onPress={()  => navigation.push('Home')}
        style={styles.buttonsConfirm}
      >
        <Text 
          style={styles.buttonTextConfirm}
        >
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Signup')}
        style ={styles.loginNewAccountContainer}
      >
        <Text
          style = {styles.loginNewAccountText}
        >
          Make a new account here!
        </Text>
      </TouchableOpacity>
    </View>
  )
}

function signUpScreen({navigation}){
  return(
    <View
      style={styles.containerForms}
    >
      <TextInput
      placeholder='Insert new E-mail'
      placeholderTextColor='white'
      style={styles.inputs}
      
      />
      <TextInput
      placeholder='Insert new password'
      placeholderTextColor='white'
      secureTextEntry={true}
      style={styles.inputs}
      />

      <TextInput
      placeholder='Confirm password'
      placeholderTextColor='white'
      secureTextEntry={true}
      style={styles.inputs}
      />

      <TouchableOpacity 
        onPress={() => navigation.goBack()}
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

function homeScreen({navigation}){
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
        onPress={() => navigation.goBack()}
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

function aboutScreen({navigation}){
  return(
    <View
      style={styles.container}
    >
      <Text
        style = {styles.contentHeadTitle}
      >
        About
      </Text>
      <Text
        style = {styles.contentHeadSubtitle}
      >
        This Apps Made by Novendra Krisna W. 
      </Text>
      <TouchableOpacity
        style = {styles.buttonBack}
        onPress={() => navigation.goBack()}
      >
        <Text
          style = {styles.buttonText}
        > 
          Return 
        </Text>
      </TouchableOpacity>
    </View>
  )
}

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={loginScreen}
        />
        <Stack.Screen
          name="Signup"
          component={signUpScreen}
        />
        <Stack.Screen
          name="Home"
          component={homeScreen}
        />
        <Stack.Screen
          name="About"
          component={aboutScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
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
    backgroundColor: '#4aff92',
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

export default App;

