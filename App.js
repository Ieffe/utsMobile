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
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth'


import Login from './Login'
import Signup from './Signup'
import Home from './Home'
import Update from './Update'

const Stack = createStackNavigator();




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
      <Stack.Navigator
        initialRouteName="Login"
      >
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
        />
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="About"
          component={aboutScreen}
        />
        <Stack.Screen
          name="Update"
          component={Update}
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

export default App;

