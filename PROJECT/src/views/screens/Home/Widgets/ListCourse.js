import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Image,
  View,
  Text,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../../../../consts/colors";
import CoursesData from "../../../../consts/CoursesData";
import HomeStyle from "../HomeStyle";

const { width } = Dimensions.get("screen");

const ItemCourse = ({item}) =>{
    return (
        <View style={styles.cardContainer}>
              <View style={[HomeStyle.card, styles.cardCourses]}>
                <View
                  style={{
                    flexDirection: "row",
                    marginBottom: 5,
                    paddingTop: 5,
                  }}
                >
                  <Ionicons name={item.icon} size={40} color={"white"} />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginBottom: 5,
                    paddingLeft: 7,
                  }}
                >
                  <Text
                    style={{ fontWeight: "bold", fontSize: 16, color: "white" }}
                  >
                    {item.title}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", paddingLeft: 7 }}>
                  <Text style={{ color: "white" }}>{item.start}</Text>
                </View>
              </View>
            </View>
    );
}

const ListCourse = () => {
  return (
    <View style={HomeStyle.row}>
      <View style={{ flex: 1 }}>
        {/* Scroll horizontal for list courses */}
        <ScrollView horizontal>
          {CoursesData.map((v) => (
            <ItemCourse item={v}  key={v.id} />
          ))}
        </ScrollView>
        {/* Scroll horizontal for list courses */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: "center",
    flex:1,
  },
  cardCourses: {
    justifyContent: "center",
    alignItems: "baseline",
    backgroundColor: colors.secondary,
    marginRight: 10,
    width:250
  },
});

export default ListCourse;
