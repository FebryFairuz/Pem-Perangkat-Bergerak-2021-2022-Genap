import {
  Button,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";

export default function LatihanUI() {
  const [toggleStatusBar, setToggleStatusBar] = useState(false);

  const buttonAct = (title) => {
    return (
      <View
        style={{
          backgroundColor: "purple",
          borderRadius: 10,
          padding: 10,
          alignItems: "center",
          marginVertical: 5,
        }}
      >
        <Text style={{ color: "white" }}>{title}</Text>
      </View>
    );
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={toggleStatusBar} />
      <View style={styles.profileContainer}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../assets/ava-boy.png")}
            style={styles.profileImage}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>Student ID:</Text>
          <TextInput
            placeholder="Enter your NPM"
            style={styles.formInput}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>Fullname:</Text>
          <TextInput
            placeholder="Enter you fullname here"
            style={styles.formInput}
          />
        </View>

        <View>
          <Button
            title="Hide Status Bar"
            onPress={() => setToggleStatusBar(true)}
          />
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => setToggleStatusBar(false)}
          >
            {buttonAct("Show Status Bar")}
          </TouchableOpacity>

          <TouchableHighlight
            activeOpacity={0.6}
            onPress={() => setToggleStatusBar(true)}
          >
            {buttonAct("Hide Status Bar")}
          </TouchableHighlight>

          <TouchableWithoutFeedback
            activeOpacity={0.6}
            onPress={() => setToggleStatusBar(false)}
          >
            {buttonAct("Show Status Bar")}
          </TouchableWithoutFeedback>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  profileContainer: {
    flex: 1,
    padding: 15,
  },
  profileImage: {
    width: 100,
    height: 100,
    backgroundColor: "#d5d5d5",
    borderRadius: 10,
    marginBottom: 15,
  },
  formGroup: {
    marginBottom: 15,
  },
  formLabel: {
    fontSize: 20,
    marginBottom: 10,
  },
  formInput: {
    borderWidth: 1,
    fontSize: 20,
    padding: 10,
  },
});
