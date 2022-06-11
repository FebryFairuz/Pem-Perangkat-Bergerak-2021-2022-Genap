import { Text, View, ScrollView, Image,ImageBackground, Dimensions,StyleSheet } from "react-native";
import React, { Component } from "react";
import colors from "../../../consts/colors";
import SignIn from "./SignIn";
import { StatusBar } from "expo-status-bar";

export class Authentifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: this.props.navigation,
      windowSize: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
      },
    };
  }
  render() {
    return (
      <ScrollView style={{flex:1, backgroundColor:'#fff'}} showsVerticalScrollIndicator={false}>
          <StatusBar hidden={true} />
          <ImageBackground source={require('../../../assets/ibik-bg-student.jpeg')}
          style={{height:(this.state.windowSize.height / 2.5), paddingTop:'5%'}}>
              <View style={styles.logoContainer}>
                <Image source={require('../../../assets/logo-ibik.png')} style={styles.logoImg} resizeMode="contain" />
              </View>
          </ImageBackground>

          <View style={styles.formContainer}>
              <SignIn navigation={this.state.navigation} />
          </View>
      </ScrollView>
    );
  }
}

export default Authentifications;

const styles = StyleSheet.create({
    logoContainer:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
    },
    logoImg:{
        width:'15%',
    },
    formContainer:{
        flex:1.5,
        backgroundColor:colors.white,
        bottom:50,
        borderTopStartRadius:60,
        borderTopEndRadius:60
    }
});
