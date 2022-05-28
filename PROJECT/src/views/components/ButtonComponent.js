import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import colors from '../../consts/colors'

const PrimaryButton = ({title, onPress = () =>{} }) =>{
    return(
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <View style={styles.btnContainer} >
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const SecondaryButton = ({title, onPress = () =>{} }) =>{
    return(
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <View style={{...styles.btnContainer, backgroundColor:colors.secondary}} >
                <Text style={{...styles.title, color:colors.primary}}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    title:{
        color:colors.white,
        fontWeight:'bold',
        fontSize:18
    },
    btnContainer:{
        backgroundColor:colors.primary,
        height:60,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center'
    }
});

export {PrimaryButton, SecondaryButton};