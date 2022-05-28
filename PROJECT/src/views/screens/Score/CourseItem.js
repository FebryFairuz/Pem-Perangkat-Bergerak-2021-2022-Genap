import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CourseItem = ({ item }) => {
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={()=>alert('You just click code '+item.code)}>
      <View style={styles.itemContainer}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.itemMain}>
            <Text style={{ fontWeight: "bold" }}>{item.code}</Text>
            <Text>{item.title}</Text>
          </View>
          
        </View>
        <View style={styles.itemFooter}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.itemText}>Semester</Text>
            <Text style={{ ...styles.itemText, fontWeight: "bold" }}>{item.semester}</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.itemText}>Credit</Text>
            <Text style={{ ...styles.itemText, fontWeight: "bold" }}>{item.credit}</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.itemText}>Grade</Text>
            <Text style={{ ...styles.itemText, fontWeight: "bold" }}>0</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    borderWidth: 1,
    borderColor: "#d5d5d5",
    marginVertical: 5,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 5,
  },
  itemMain: {
    flex: 3,
  },
  itemPercent: {
    justifyContent: "center",
    alignItems: "flex-end",
    flex: 1,
  },
  itemFooter: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  itemText: { color: "purple", fontSize: 14 },
});

export default CourseItem;
