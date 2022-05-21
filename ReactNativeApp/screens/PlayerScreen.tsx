import PropTypes from 'prop-types'
import React, { Component, useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Text, View } from '../components/Themed';
import { StyleSheet } from 'react-native';

const iconSize = 300
const base = <Icon name="play" size={iconSize} color ='#000000'></Icon>
//<Text>Keep Watching!</Text>;

const PlayerScreen = ({ route, navigation }:{route: any, navigation: any}) => {
  const [dt, setDt] = useState(new Date().getTime());
  const [strt, setStrt] = useState(new Date().getTime());
  const [currHistory, setHist] = useState(route.params.watchData.history);
  const [currIndex, setIndex] = useState(0);
  const [display, setDis] = useState(base);


  useEffect(() => {
    setIndex(1);
    setHist(route.params.watchData.history);
    console.log(route.params.watchData.history);
    const startStamp = currHistory[0].time;
    console.log(startStamp);
    for (let i = 0; i < currHistory.length; i++){
      currHistory[i].time -= startStamp;
    }
    console.log(currHistory);
    setStrt(new Date().getTime())
    let secTimer = setInterval( () => {
      setDt(new Date().getTime())
    },100)
  }, []);

  const renderIcon = () => {
    console.log(currIndex);
    // console.log(currHistory[currIndex].time)
    console.log()
    if (currIndex < currHistory.length){
      if (dt - strt >= currHistory[currIndex].time){
        const icon = currHistory[currIndex].reaction
        console.log(typeof icon);
        setIndex(currIndex + 1);
        if (icon == "sad-tear"){
          setDis(<Icon name={icon} size={iconSize} color ='#0000FF'></Icon>)
        } 
        else if (icon == "grin-beam"){
          setDis(<Icon name={icon} size={iconSize} color ='#00FF00'></Icon>)
        }
        else if (icon == "angry"){
          setDis(<Icon name={icon} size={iconSize} color ='#FF0000'></Icon>)
        } 
        else if (icon == "surprise"){
          setDis(<Icon name={icon} size={iconSize} color ='#FFFF00'></Icon>)
        }
        return display;
      }
      return display;
    }
    return display;
    // if (isLoggedIn) {
    //   return <button>Logout</button>;
    // } else {
    //   return <button>Login</button>;
    // }
  }
  
  return (
    <View style={styles.container}>
      {renderIcon()}
      {/* {dt - strt} */}
    </View>
  );

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

export default PlayerScreen
