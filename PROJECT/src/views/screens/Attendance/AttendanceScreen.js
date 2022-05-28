import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import AttdSectionList from "./Widgets/AttdSectionList";

export class AttendanceScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation : this.props.navigation
    };
  }
  render() {
    return (
      <View style={styles.AttdContainer}>
        <AttdSectionList navigation={this.state.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  AttdContainer: {
    flex: 1,
    paddingHorizontal:15,
    paddingVertical:10,
    backgroundColor:'#f4fcff'
  }
});

export default AttendanceScreen;
