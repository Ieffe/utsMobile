import React, {Component} from "react";
import firestore from '@react-native-firebase/firestore'
import auth, { firebase } from '@react-native-firebase/auth'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
  } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
  

  export default class Post extends Component {
      constructor(){
          super();
          this.state = {
              post: []
          }
          this.getPost()
      }

      getPost = async () => {
          try{
              const snap = await firestore().collection("posts").onSnapshot(snap => {
                  let docs = []
                  snap.forEach(doc => docs.push({ ...doc.data(), id: doc.id}))
                  this.setState({ posts: docs})
                  console.log(this.state.posts)
              })
          } catch (error) {}
      }

      deletePost = (id) => {
          firestore().collection('posts').doc(id).delete().then(() => {
              alert('deleted')
          })
      }

      render() {
          return(
              <View>
                  <ScrollView>
                      {this.state.posts.map(data => {
                          return (
                              <View>
                                  <Text> Title: {data.title}</Text>
                                  <Text> Desc: {data.title}</Text>
                                  <Image
                                    source={{uri: data.Image}}
                                    style={{height: 200, width:200
                                    }}
                                  />
                                  <TouchableOpacity
                                    onPress={() => this.props.navigation.navgate('Update', {post: data})}
                                  >
                                      <Text>
                                        Edit
                                      </Text>
                                  </TouchableOpacity>  
                                  <TouchableOpacity
                                    onPress={() => this.deletePost(data.id)}
                                  >
                                      <Text>
                                        Delete
                                      </Text>
                                  </TouchableOpacity>
                              </View>
                              
                          )
                      })}
                  </ScrollView>
              </View>
          )
      }
  }