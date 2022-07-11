import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { Button, Menu, Divider, Provider } from "react-native-paper";
import Avatar from "../../../../assets/ava-boy.png";
import account from "../../../../consts/account";
import colors from "../../../../consts/colors";
import HomeStyle from "../HomeStyle";

const ProfileHead = ({navigation}) => {
  let usernameArr = account.fullname.split(" ");
  let username = usernameArr[0];

  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const ButtonImg = () => {
    return (
      <TouchableOpacity onPress={openMenu}>
        <Image
          source={Avatar}
          style={{
            height: 45,
            width: 45,
            borderRadius: 25,
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "purple",
          }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={{...HomeStyle.header,zIndex:2, elevation:2}}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "column", flex: 3 }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 24 }}>Hi,</Text>
            <Text style={{ fontSize: 24, fontWeight: "bold", marginLeft: 5 }}>
              {username}
            </Text>
          </View>
          <Text style={{ fontSize: 18, marginTop: 5, color: "black" }}>
            {account.studentid}
          </Text>
        </View>
          <Provider>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={<ButtonImg />}
                style={{ top: 50,}}
                contentStyle={{ backgroundColor: colors.white }}
              >
                <Menu.Item
                  onPress={() => {alert("You just click me")}}
                  title="Message"
                />
                <Menu.Item onPress={() => {}} title="My Profile" />
                <Divider />
                <Menu.Item onPress={(e) => navigation.navigate("AuthentificationsScreen")} title="Logout" />
              </Menu>
            </View>
          </Provider>
      </View>
    </View>
  );
};

export default ProfileHead;
