import { Text, StyleSheet, View, SafeAreaView } from "react-native";
import React, { Component } from "react";

class LatihanRCC extends Component {
  constructor(props) {
    super(props);
    this.TextTitle = this.TextTitle.bind(this);
    this.state = {
      hari: "Sabtu",
      kelas: "Reguler TI-20 PA",
    };
  }

  TextTitle(param) {
    return <Text>{param.data}</Text>;
  }

  render() {
    const TrimSchedule = () => {
      let waktu = "07.30-10.00";
      return (
        <View>
          <Text>Hari: {this.state.hari} </Text>
          <Text>Pukul: {waktu} </Text>
          <Text>Kelas: {this.state.kelas} </Text>
        </View>
      );
    };

    return (
      <SafeAreaView>
        <Text>LatihanRCC</Text>

        {this.TextTitle({ data: "Pemograman Perangkat Bergerak" })}

        {TrimSchedule()}

      </SafeAreaView>
    );
  }
}

export default LatihanRCC;
