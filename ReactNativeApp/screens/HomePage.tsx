import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'

const HomePage = ({navigation}:{navigation: any}) => {
    return (
        <View style={styles.container}>
            <Text>App Logo</Text>
            <Button onPress={()=> navigation.navigate('View')} title = 'View'></Button>
            <Button onPress={()=> navigation.navigate('Record')} title = 'Record'></Button>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default HomePage