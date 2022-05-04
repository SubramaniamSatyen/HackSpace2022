import { Text, TextProps, View } from './Themed';
import { Button } from 'react-native-paper'
import React, { Component } from "react";
import { Alert, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export class Buttons extends Component{
  state =  {
      history: [{
          reaction: 'Start',
          time: new Date().getTime(),
      }],
      userName: 'Temp_Name',
      stepNum: 0,
      duration: 0,
  }

  logLocal(reactionType: string){
    const history = this.state.history.slice(0, this.state.stepNum + 1);
    this.setState({
      history: history.concat([{
        reaction: reactionType,
        time: new Date().getTime(),
      }]),
      stepNum: history.length,
    });
    console.log(this.state);
  }

  render(){
    return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Button onPress={() => this.logLocal("grin-beam")}><Icon name='grin-beam' size={100} color ="#00FF00"></Icon></Button>
        <Button onPress={() => this.logLocal("sad-tear")}><Icon name='sad-tear' size={100} color ="#0000FF"></Icon></Button>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Button onPress={() => this.logLocal("surprise")}><Icon name='surprise' size={100} color ="#FFFF00"></Icon></Button>
        <Button onPress={() => this.logLocal("angry")}><Icon name='angry' size={100} color ="#FF0000"></Icon></Button>
      </View>
    </View>
  );
  }
}

// export function Buttons() {
//   return ( 
  // <View>
  //   <View style={{ flexDirection: "row" }}>
  //     <Button onPress={() => console.log("button :)")}><Icon name='grin-beam' size={100} color ="#00FF00"></Icon></Button>
  //     <Button onPress={() => console.log("button :(")}><Icon name='sad-tear' size={100} color ="#0000FF"></Icon></Button>
  //   </View>
  //   <View style={{ flexDirection: "row" }}>
  //     <Button onPress={() => console.log("button :O")}><Icon name='surprise' size={100} color ="#FFFF00"></Icon></Button>
  //     <Button onPress={() => console.log("button >:|")}><Icon name='angry' size={100} color ="#FF0000"></Icon></Button>
  //   </View>
  // </View>
  // );
// }