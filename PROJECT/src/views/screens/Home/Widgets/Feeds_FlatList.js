import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import colors from "../../../../consts/colors";

export default function Feeds() {
  const FeedsData = [
    { id: 1, title: "Jadwal UTS 2022-2023 Genap", Desc: "bla bla bla bla bla bla bla bla bla bla bla bla bla . Read more" },
    { id: 2, title: "Jadwal UAS 2022-2023 Genap", Desc: "bla bla bla bla bla bla bla bla bla bla bla bla bla . Read more" },
    { id: 3, title: "Libur Semester Genap", Desc: "bla bla bla bla bla bla bla bla bla bla bla bla bla . Read more" },
  ];

  const CardBox = ({ item }) => {
    return (
      <View key={item.id} style={styles.card}>
        <Image
          style={{ width: 80, height: 80 }}
          source={require("../../../../assets/logo-ibik-white.jpeg")}
        />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 10,
            flex: 1,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom:2, color:colors.purple }}>{item.title}</Text>
          <Text style={{ fontSize: 14, color: colors.grey }}>{item.Desc}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
          showsVerticalScrollIndicator={false}
          data={FeedsData}
          renderItem={({ item }) => <CardBox item={item} />}
          keyExtractor={(item) => item.id}
          numColumns={0}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20
  },
  card: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: colors.white,
    marginVertical: 10,
    marginRight: 2,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.purple,
    flexShrink: 1,
  },
});
