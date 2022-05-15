import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function LatihanSoal6() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "aliceblue" }}>
      <View
        style={{
          borderWidth: 1,
          margin: 15,
          padding: 15,
          flexDirection: "row",
          backgroundColor: "white",
        }}
      >
        <View style={{flex:2}}>
          <Text style={styles.headingText}>Yudhistira Kusuma </Text>
          <Text style={styles.headingText}>202310067</Text>
        </View>
        <View style={{flex:1,flexDirection:'row-reverse'}}>
          <Image
            source={require("../assets/ava-boy.png")}
            style={styles.image}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: "skyblue",
  },
});
