import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../../../consts/colors";
import { PrimaryButton } from "../../components/ButtonComponent";
import account from "../../../consts/account";

export default function SignIn(props) {
  const [msgError, setMsgError] = useState("");
  const [errorMsg, setErrorMsg] = useState({email:"",password:""});
  const [data, setData] = useState({
    email: "",
    password: "",
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const handlerIconPassword = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handlerPostSignIn = () =>{
    //validation
    if(!data.email){
        setErrorMsg({...errorMsg, email:"Required field"})
    }else if(!data.password){
        setErrorMsg({...errorMsg, password:"Required field"})
    }else if(!data.email && !data.password){
        setErrorMsg({email:"Required field", password:"Required field"})
    }else{
        setErrorMsg({email:"", password:""})
        if((data.email === account.email) && (data.password === account.password) ){
            props.navigation.navigate('Main');
        }else{
            Alert.alert(
                "Invalid Grant",
                "Username or password doesn't match on system.",
                [
                  { text: "Close", onPress: () => setData({email:"",password:""}) }
                ]
            );
        }
    }
  }

  return (
    <View style={{ padding: 40 }}>
      <Text style={{ fontSize: 34, color: colors.primary, fontWeight: "bold" }}>
        Academic Portal{" "}
      </Text>
      <Text>
        Use your <Text style={{ color: "dodgerblue" }}>Google Account</Text> to
        signin
      </Text>

      {/* Form sign-in */}
      <View style={{ flex: 1, marginTop: 45 }}>
        <View style={styles.formGroup}>
          <Text style={styles.labelText}>Email</Text>
          <TextInput
            style={styles.inputText}
            placeholder={"Enter your mail address"}
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize='none'
            onChangeText={text => setData({ ...data, email: text })}
            defaultValue={data.email}
          />
          <Text style={styles.textError}>{errorMsg.email}</Text>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.labelText}>Password</Text>
          <View style={styles.action}>
            <TextInput
              style={styles.inputText}
              secureTextEntry={data.secureTextEntry}
              placeholder={"Enter your password"}
              autoCorrect={false}
              onChangeText={text => setData({ ...data, password: text })}
              defaultValue={data.password}
            />
            <TouchableOpacity
              style={{ borderBottomWidth: 1, borderBottomColor: colors.purple }}
              onPress={() => handlerIconPassword()}
            >
              <Ionicons
                name={data.secureTextEntry ? "eye" : "eye-off"}
                style={{fontSize:20}}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.textError}>{errorMsg.password}</Text>
        </View>

        <View style={{ alignItems: "flex-end" }}>
          <Text style={{ color: colors.purple, fontWeight: "bold" }}>
            Forgot Password ?
          </Text>
        </View>

        <View style={{flex: 3, justifyContent: 'flex-end', paddingHorizontal:20,marginTop:45}}>
            <PrimaryButton title={"Sign In"} onPress={() => handlerPostSignIn() } />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formGroup: {
    marginBottom: 15,
  },
  labelText: {
    color: colors.grey,
    fontSize: 16,
    marginVertical: 5,
  },
  action: {
    flexDirection: "row",
  },
  inputText: {
    flex: 1,
    paddingVertical: 5,
    color: "#05375a",
    borderBottomWidth: 1,
    borderBottomColor: colors.purple,
    textTransform:'lowercase',
    fontSize:18
  },
  textError: {
    color: colors.primary,
    marginTop: 5,
    fontStyle: "italic",
  },
});
