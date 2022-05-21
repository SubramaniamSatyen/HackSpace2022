import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import React, { Component, useEffect, useState } from "react";
import { Button, TextInput } from 'react-native-paper'
import Navigation from '../navigation';
import { useNavigation } from '@react-navigation/native';


import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc, getDoc, getDocs, collection } from 'firebase/firestore';


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


// export default function TabTwoScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Tab Two</Text>
//       <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
//       <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
//     </View>
//   );
// }


// export default class TabTwoScreen extends Component{
//   constructor(props){
//     super(props);
//     //props.navigation.navigate('Watch');
//   }

//   state =  {
//     ids: [""],
//     data: [{}]
//   }

  
//   componentDidMount() {
//     this.getData();
//   }

//   getData = async () => {
//     // Some consuming task like fetch api or await calls
    
//     const querySnapshot = await getDocs(collection(firestore, "recordingData"));
//     console.log(querySnapshot);
//     querySnapshot.forEach((doc) => {
//       // doc.data() is never undefined for query doc snapshots
//       console.log(doc.id, " => ", doc.data());
//       console.log(typeof(doc.data()))
//       const ids = this.state.ids;
//       const id = doc.id;
//       const data = this.state.data;

//       this.setState({
//         ids: ids.concat([doc.id]),
//         data: data.concat([doc.data()])
//         // history: history.concat([(doc.data())])
//       });
//     });
//   }

//   clickedRecord(reactionType: string){
//     const index = this.state.ids.findIndex((element) => (element == reactionType));
//     console.log(this.state.data[index]);
//     const watchData = this.state.data[index];
//     //Render the next page with this data
//     // const navigation = useNavigation();
//     // navigation.navigate('PlayerScreen');

//   }

//   render(){
//     const ids = this.state.ids;
//     let recordList=[];

//     recordList = ids.map(listInfo => (
//       <Button key={listInfo} onPress={() => this.clickedRecord(listInfo)}>{listInfo}</Button>
//     ));

//     console.log(this.state);
//     return (
//       <View style={styles.container}>
//       <Text style={styles.title}>Tab Two</Text>
//       <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
//       {/* <EditScreenInfo path="/screens/TabTwoScreen.tsx" /> */}
//       {recordList}
//       </View>
//     );
//   }

// }

const TabTwoScreen = ({navigation}:{navigation: any}) => {
  const [ids_state, setIds] = useState([""]);
  const [data_state, setData] = useState([{}]);
  
  useEffect(() => {
    const getData = async () => {
      let localIds = [""];
      let localData = [{}];
      // Some consuming task like fetch api or await calls
      const querySnapshot = await getDocs(collection(firestore, "recordingData"));
      console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        console.log(typeof(doc.data()))
        const ids = ids_state;
        const data = data_state;
        console.log(ids_state.concat([doc.id]))
        console.log(data)
        //Aggregate locally, then add to state..?
        localIds = localIds.concat([doc.id]);
        localData = localData.concat([doc.data()]);
      });
      setIds(localIds);
      setData(localData);
    }
    getData();
    console.log("Effect");
  }, []);

  // const getData = async () => {
  //   // Some consuming task like fetch api or await calls
  //   const querySnapshot = await getDocs(collection(firestore, "recordingData"));
  //   console.log(querySnapshot);
  //   querySnapshot.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     console.log(doc.id, " => ", doc.data());
  //     console.log(typeof(doc.data()))
  //     const ids = ids_state;
  //     const id = doc.id;
  //     const data = data_state;

  //     setIds(ids.concat([doc.id]));
  //     setData(data.concat([doc.data()]));
  //   });
  // }
  

  const clickedRecord = (reactionType: string) => {
    const index = ids_state.findIndex((element) => (element == reactionType));
    console.log(data_state[index]);
    const watchData = data_state[index];
    //Render the next page with this data
    navigation.navigate('Watch', {watchData});
    // const navigation = useNavigation();
    // navigation.navigate('PlayerScreen');

  };

  // const ids = ids_state;
  // let recordList=[];

  // recordList = ids.map((listInfo) => (
  //   <Button key={listInfo} onPress={() => clickedRecord(listInfo)}>{listInfo}</Button>
  // ));
  console.log(ids_state);
  return (
    <View style={styles.container}>
    <Text style={styles.title}>View All Reactions!</Text>
    {ids_state.map((listInfo) => {
      return (
        <Button key={listInfo} onPress={() => clickedRecord(listInfo)}>{listInfo}</Button>
      );
  })}
    </View>
  );
}

export default TabTwoScreen




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 0,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
