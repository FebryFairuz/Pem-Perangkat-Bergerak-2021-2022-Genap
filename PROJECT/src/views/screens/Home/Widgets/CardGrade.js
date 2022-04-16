import { StyleSheet, Text, View } from "react-native";
import colors from "../../../../consts/colors";
import account from "../../../../consts/account";
import HomeStyle from "../HomeStyle";

const maxSemester = 8;
let percentSemester = 100 / (maxSemester / parseInt(account.semester));
percentSemester = parseInt(percentSemester);

const CardGrade = () => {
  
  return (
        <View style={HomeStyle.row}>
          <View style={HomeStyle.card}>
            {/* Title*/}
            <Text style={HomeStyle.cardTitle}>
              Current Grade
            </Text>
            {/* End Title*/}

            { /*Info grade*/}
            <View style={{ flexDirection: "row", marginTop: 5 }}>
              <Text style={{ fontSize: 18, color: "white" }}>Semester {account.semester}</Text>
              <Text style={{ fontSize: 18, color: "white", marginLeft: 20 }}>
                GPA {account.gpa}
              </Text>
            </View>
            { /*End Info grade*/}

            { /*Indicator Grade*/}
            <View style={HomeStyle.indicatorContainer}>
              { /*Indicator active*/}
              <View style={[HomeStyle.indicatorItem, styles.indicatorItem]}></View>
              { /*Indicator active*/}
            </View>

            <Text
              style={HomeStyle.indicatorLabel}
            >
              { percentSemester }% completed
            </Text>

          </View>
          { /*End Indicator Grade*/}
        </View>
  );
};

const styles = StyleSheet.create({
  indicatorContainer: {
    width: "100%",
    backgroundColor: "grey",
    borderRadius: 10,
    marginTop: 25,
  },
  indicatorItem: {
    width:  ((percentSemester > 100) ? 100+"%" : percentSemester+"%"),
  },
});

export default CardGrade;
