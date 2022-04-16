import {Dimensions,ScrollView,StyleSheet,Image, View, Text} from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from "../../../../consts/colors";
import courses from "../../../../consts/courses"
import HomeStyle from "../HomeStyle";

const {width} = Dimensions.get('screen') 
const cardWidth = width /2

const ListCourse = () =>{
    return (
        <View style={HomeStyle.row}>
            <View style={{ flex: 1 }}>
              {/* Scroll horizontal for list courses */}
              <ScrollView horizontal >
              {courses.map((v)=>(
                <View style={HomeStyle.cardContainer} key={v.id}>
                    <View style={[HomeStyle.card, HomeStyle.cardCourses]}>
                        <View style={{ flexDirection: 'row', marginBottom: 5, paddingTop: 5 }}>
                            <Ionicons name={v.icon} size={40} color={"white"} />
                        </View>
                        <View style={{ flexDirection: 'row', marginBottom: 5, paddingLeft: 7 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16, color: "white" }} >{v.title}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', paddingLeft: 7 }}>
                            <Text style={{ color: "white" }}>{v.start}</Text>
                        </View>
                    </View>
                </View>  
              ))}
              </ScrollView>
              {/* Scroll horizontal for list courses */}
            </View>
          </View>
        
        
        
        
    )
}

export default ListCourse