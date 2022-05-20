import React from 'react'
import {StyleSheet, TouchableOpacity, View, Text, Button} from 'react-native'
import AppLogo from '../images/HackSpaceLogo.png';

const CustomButton=({text, onPress}) => {
    return(
        <TouchableOpacity onPress ={onPress}>
            <View style = {styles.button}>
                <Text style = {styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const HomePage = ({navigation}:{navigation: any}) => {
    return (
        <View style={styles.container}>
            <div>
                <img src = {AppLogo} width = '250px'/>
            </div>
            {/* <Button onPress={()=> navigation.navigate('View')} title = 'View'></Button>
            <Button onPress={()=> navigation.navigate('Record')} title = 'Record'></Button> */}

            <CustomButton text = 'View'  onPress={()=> navigation.navigate('View')} />
            <CustomButton text = 'Record'  onPress={()=> navigation.navigate('Record')} />
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button:{
        borderRadius: 35,
        width: 180,
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor:'#47A9BE',
    },
    buttonText:{
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 25,
        textAlign:'center',
    },
})

export default HomePage