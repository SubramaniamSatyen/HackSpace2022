import { EvilIcons } from '@expo/vector-icons';
import { Alert, StyleSheet} from 'react-native';
// import { Button } from '@rneui/themed';
import { Button, TextInput } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome5';


import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Buttons } from '../components/Buttons';
import React, { Component, useState } from "react";


 import { initializeApp } from 'firebase/app';
 import { getFirestore, setDoc, doc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBC1D8VU16LRpoNNOEo_lgNM_FSB8fU7Qs",
  authDomain: "hackspace-2022.firebaseapp.com",
  projectId: "hackspace-2022",
  storageBucket: "hackspace-2022.appspot.com",
  messagingSenderId: "517232305599",
  appId: "1:517232305599:web:15d1b0cbd53ca4487e6d0a",
  measurementId: "G-H4SXND7LB7"
};


initializeApp(firebaseConfig);

const firestore = getFirestore();

export default class TabOneScreen extends React.Component<any,any>{
  constructor(props){
    super(props);
    this.state =  {
      history: [{
          reaction: 'Start',
          time: new Date().getTime(),
      }],
      userName: 'Temp_Name',
      stepNum: 1,
      duration: 0,
    }
  }
  // state =  {
  //   history: [{
  //       reaction: 'Start',
  //       time: new Date().getTime(),
  //   }],
  //   userName: 'Temp_Name',
  //   stepNum: 1,
  //   duration: 0,
  // }

  logLocal(reactionType: string){
    const history = this.state.history;
    this.setState({
      history: history.concat([{
        reaction: reactionType,
        time: new Date().getTime(),
      }]),
      stepNum: history.length,
    });
  }

  logDatabase(){
    // setDoc(doc(firestore, "testCollection", "testDocument: " + Date()), {
    //   field1: "val1",
    //   field2: "val2",
    //   field3: "val3"
    // });
    setDoc(doc(firestore, "recordingData", this.state.userName), {
      history: this.state.history,
    });
    console.log("Database logged!");
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tab One Title</Text>
        <Text>Name of Recording:</Text>
        <TextInput 
            style ={styles.input}
            placeholder = "Enter Here"
            onChangeText={(userName) => this.setState({userName})}
        />
    <Text>Username: {this.state.userName}</Text> 
        {/* <UsernameSetup /> */}
        <Buttons logLocal={this.logLocal.bind(this)}></Buttons>
        <Button onPress={() => this.logDatabase()}><Icon name='check' size = {40} color = "000000"></Icon></Button>
        {/* <Button onPress={() => Alert.alert("button:)")}><Icon name='grin-beam' size={100} color ="#00FF00"></Icon></Button>
        <Button onPress={() => Alert.alert("button:)")}><Icon name='sad-tear' size={100} color ="#0000FF"></Icon></Button>
        <Button onPress={() => Alert.alert("button:)")}><Icon name='surprise' size={100} color ="#FFFF00"></Icon></Button>
        <Button onPress={() => Alert.alert("button:)")}><Icon name='angry' size={100} color ="#FF0000"></Icon></Button> */}
        {/* <Icon name='grin-beam' size={100} color ="#0000FF"></Icon> */}
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="/screens/TabOneScreen.tsx" />
      </View>
    );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

  input:{
    backgroundColor: '777',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    width: 250,
    height: 30,
    padding: 10,
    margin: 10,

  }
});
