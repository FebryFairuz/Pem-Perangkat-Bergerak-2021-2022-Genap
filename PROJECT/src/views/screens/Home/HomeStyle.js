import { StyleSheet } from "react-native";
import colors from "../../../consts/colors";

const HomeStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f4fcff",
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
      flex:1,
      padding: 15,
      borderRadius: 10,
      height: 150,
    },
    cardTitle: {
      fontSize: 22,
      fontWeight: "bold",
      color: "white"
    },
    
});

  export default HomeStyle;