import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

export default function LatihanStyle() {
  const ItemText = () => {
    return (
      <View style={{ ...styles.dimension, backgroundColor: "powderblue" }}>
        <Text style={{ color: "red" }}>LatihanStyle</Text>
        <Text style={styles.headingText}>Text Heading 1</Text>
        <Text style={{ ...styles.headingText, color: "steelblue" }}>
          Text Heading 2
        </Text>
      </View>
    );
  };

  const ItemImage = () => {
    return (
      <Image
        source={require("../assets/ava-boy.png")}
        style={{
          ...styles.dimension,
          backgroundColor: "skyblue",
        }}
      />
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "aliceblue" }}>
      <View style={{ justifyContent:'initial', flex: 1 }}>
        <ItemText />
        <ItemImage />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  dimension: {
    width: 150,
    height: 150,
    margin: 5,
  },
});
