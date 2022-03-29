import React, { Component } from 'react'
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

const ScrollViewComponent = () => {
    return (
        <ImageBackground 
            source={{uri: "https://kis.ibik.ac.id/environment/ibik/images/background.jpg"}} 
            resizeMode="cover" 
            style={styles.container} >
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.card} >
                        <Text style={styles.headingTitle}>IBIK</Text>
                        <Text style={styles.subHeading}>Pem Perangkat Bergerak</Text>
                    </View>
                    <View style={styles.card} >
                        <Text style={styles.subHeading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.</Text>
                    </View>

                    <View style={styles.card} >
                        <Text style={styles.subHeading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    card:{
        backgroundColor:"rgba(0,0,0,0.7)",
        padding:10
    },
    headingTitle: {
        fontSize: 42,
        textAlign: "center",
        color: "#FFF"
    },
    subHeading: {
        fontSize: 28,
        textAlign: "center",
        color: "tomato"
    }
})
export default ScrollViewComponent
