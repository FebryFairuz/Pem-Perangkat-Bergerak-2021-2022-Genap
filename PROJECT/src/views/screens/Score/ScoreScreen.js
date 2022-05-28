import { StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
import ScoreFlatList from "./ScoreFlatList";

export class ScoreScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.ScoreContainer}>
        <ScoreFlatList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ScoreContainer: {
    flex: 1,
    paddingHorizontal:15,
    paddingVertical:10,
    backgroundColor:'#f4fcff'
  }
});

export default ScoreScreen;
