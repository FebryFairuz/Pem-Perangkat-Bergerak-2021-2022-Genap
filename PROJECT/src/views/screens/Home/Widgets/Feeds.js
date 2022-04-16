import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../../../../consts/colors";
import HomeStyle from "../HomeStyle";

export default function Feeds() {
  const FeedsData = [
    { id: 1, title: "Jadwal UTS 2022-2023 Genap", Desc: "bla bla bla bla bla bla bla bla bla bla bla bla bla . Read more" },
    { id: 2, title: "Jadwal UAS 2022-2023 Genap", Desc: "bla bla bla bla bla bla bla bla bla bla bla bla bla . Read more" },
    { id: 3, title: "Libur Semester Genap", Desc: "bla bla bla bla bla bla bla bla bla bla bla bla bla . Read more" },
  ];

  const CardBox = (param) => {
    const item = param.data;
    return (
          <View key={item.id} style={[HomeStyle.card, HomeStyle.cardFeeds]}>
            <View style={{flexDirection:'row'}}>
              <Image
                style={{ width: 80, height: 80 }}
                source={require("../../../../assets/logo-ibik-white.jpeg")}
              />
              <View
                style={{ flex:1 }} >
                <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom:2, color:"purple" }}>{item.title}</Text>
                <Text style={{ fontSize: 14, color: 'grey',textAlign:'justify' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</Text>
              </View>
            </View>
          </View>
    );
  };

  return (
      <View style={HomeStyle.row}>
        <View style={{flex:1}}>
          {FeedsData.map((v)=>(
            <CardBox data={v} key={v.id} />
          ))}
        </View>
      </View>
  );
}
