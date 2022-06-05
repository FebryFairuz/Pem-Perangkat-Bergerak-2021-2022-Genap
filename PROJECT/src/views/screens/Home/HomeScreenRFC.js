import React from 'react'
import { SafeAreaView, ScrollView, HomeStyleheet, Text, View, Image, StatusBar } from 'react-native'
import HomeStyle from './HomeStyle'
import ProfileHead from './Widgets/ProfileHead'
import CardGrade from './Widgets/CardGrade'
import ListCourse from './Widgets/ListCourse'
import Feeds from './Widgets/Feeds'

export function HomeScreenRFC({ navigation }) {
  return (
    <SafeAreaView style={HomeStyle.container}>
      <StatusBar hidden={false} />
      <ScrollView style={{ paddingHorizontal: 20 }}>

        { /*HEAD PROFILE INFO*/}
        <ProfileHead />
        { /*END HEAD PROFILE INFO*/}

        { /*Card Current Grade*/}
        <CardGrade />
        { /*End Card Current Grade*/}


        {/*Section Timetable*/}
          {/* Row Title */}
          <View style={HomeStyle.row}>
            <Text style={HomeStyle.title}>Timeltable for today</Text>
          </View>
          {/* End Row Title */}

          {/* Row List courses */}
          <ListCourse />
          {/* End Row List courses */}
        {/*End Section Timetable*/}


        {/* Section Feed */}
          {/* Row Title */}
          <View style={HomeStyle.row}>
            <Text style={HomeStyle.title}>Feeds</Text>
          </View>
          {/* End Row Title */}
          
          {/* Row List feeds*/}
          <Feeds />
          {/* End Row List feeds*/}
        {/* End Section Feed */}

      </ScrollView>
    </SafeAreaView>
  )
}


export default HomeScreenRFC;
