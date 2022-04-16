import { StyleSheet } from "react-native";
import colors from "../../../consts/colors";

const HomeStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f4fcff",
      paddingTop: 40
    },
    row: {
      marginTop: 20,
      flexDirection: 'row'
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.purple,
    },
    header: {
      flex:1,
      marginTop:10
    },
    card: {
      backgroundColor: colors.purple,
      width: "100%",
      padding: 15,
      borderRadius: 10,
      height: 150,
    },
    cardTitle: {
      fontSize: 22,
      fontWeight: "bold",
      color: "white"
    },
    indicatorContainer: {
      width: "100%",
      backgroundColor: "grey",
      borderRadius: 10,
      marginTop: 25,
    },
    indicatorItem: {
      height: 12,
      width: '50%',
      borderRadius: 10,
      backgroundColor: 'aqua',
      marginHorizontal: 0,
    },
    indicatorLabel:{
      fontSize: 14,
      color: "white",
      marginTop: 10,
      marginLeft: 0,
    },
    courseContainer: {
      flex: 1,
    },
    cardContainer: {
      justifyContent: 'center'
    },
    cardCourses: { 
      justifyContent: 'center', 
      alignItems: 'baseline', 
      backgroundColor: colors.primary, 
      width: 250, 
      marginRight:10,
    },
    cardFeeds:{
      backgroundColor:colors.white,
      borderWidth:1, 
      borderColor:'grey',
      padding:10,
      height:120,
      marginBottom:20
    }
  });

  export default HomeStyle;