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
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default class Update extends Component {
    constructor(){
        super();
        this.state = {
            post: null,
            id: '',
            title : '',
            description: '',
            image: ''
        }
    }
    componentWillMount() {
        if(this.props.navigation.getParam('post') != null){
            let data = this.props.navigation.getParam('post');
            this.setState({
                id: data.id,
                title: data.title,
                description: data.description,
                image: data.image
            })
        }
    }
    
    handleTextInput = field => text => {
        this.setState({
            [field]: text
        });
    
    }
    
    handleSave = () => {
        let id = this.state.id
        firestore().collection('posts').doc(id).set({
            title: this.state.title,
            description: this.state.description,
            image: this.state.image,
        }).then(() => {
            alert('Updated');
        });
        this.props.navigation.navigate('Post');
    }

    handleSelectImage = () => {
        const options = {
            quality: 0.5,
            maxHeight: 200,
            maxWidth: 200,
            storageOptions: {
                skipBackup: true
            }
        };

        launchImageLibrary(options, response => {
            if (response.data) {
                this.setState({
                    image: 'data:image/jpeg;base64,' + response.data
                });
            }
        });
    };
    
    render() {
        return (
        <View style= { styles.wrapper}>
            <Text>Title</Text>
            <TextInput
            onChangeText={this.handleTextInput('title')}
            placeholder="title" value={this.state.title}
            />
            <Text>Description</Text>
            <TextInput
            onChangeText={this.handleTextInput('description')}
            placeholder="description"
            value={this.state.description}
            />
            <Image
            source={{ uri: this.state.image }}
            style={{ height:200, width: 200 }}
            />
            <TouchableOpacity onPress={this.handleSelectImage.bind(this)}>
                <Text>
                    Change Image
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handleSave}>
                <Text>
                    Save
                </Text>
            </TouchableOpacity>
        </View>
        );
    }
    }
    
    const styles = StyleSheet.create({
    wrapper: {
    height: '100%'
    }
    });