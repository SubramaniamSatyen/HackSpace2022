import { EvilIcons } from '@expo/vector-icons';
import { Alert, StyleSheet} from 'react-native';
// import { Button } from '@rneui/themed';
import { Button } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome5';


import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Buttons } from '../components/Buttons';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Tab One Title</Text>
      <Buttons></Buttons>
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
});
