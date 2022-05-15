import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TextTitle = (param) => {
  return <Text>{param.data}</Text>;
};

const hari = "Sabtu";

export function Latihan() {
  var kelas = "Reguler TI-20 PA";

  const TrimSchedule = () => {
    let waktu = "07.30-10.00";
    return (
      <View>
        <Text>Hari: {hari} </Text>
        <Text>Pukul: {waktu} </Text>
        <Text>Kelas: {kelas} </Text>
      </View>
    );
  };

  const StudentData = (param) => {
    return (
      <View>
        <Text>Student ID : {param.id} </Text>
        <Text>Student Name : {param.name} </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      
      {StudentData( {id:3320190306, name:"Febry D F"} )}
      
      <Text>Latihan</Text>
      <TextTitle data="Pemograman Perangkat Bergerak" />

      {TextTitle({ data: "Pertemuan ke 7" })}

      <TrimSchedule />
    </View>
  );
}
export default Latihan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
