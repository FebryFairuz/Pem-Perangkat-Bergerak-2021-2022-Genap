import React, { useState } from 'react'
import { Button, ScrollView, Text, TouchableOpacity, View } from 'react-native'

export function ProfileScreen() {
  const firstName = "Febry";//value srting
  const middleName = "Damatraseta";//value srting
  const lastName = "Fairuz"; //value srting
  const fullname = firstName + ' '+ middleName + ' '+ lastName;
  
  const studentid = 3320190306; //value long
  const gender = 'M'; //value char
  var semester = 4; //value integer
  let gpa = 3.4; //value desimal

  const maxSemester = 8;
  let percentSemester = 100 / (maxSemester / semester);

  var educations = [
    {level:"SD", school:"Elementary Genin", kota:"Konohagakure"},
    {level:"SMP", school:"Academic Oinin", kota:"Konohagakure"},
    {level:"SMA", school:"Academic Kage", kota:"Konohagakure"},
  ];
  const objectProfile = {
    studentid: studentid,
    fullname: fullname,
    gender: gender,
    semester: semester,
    gpa: gpa,
    percentSemester:percentSemester,
    hobby: ['makan','minum','tidur'],
    educations: educations
  };

  let genderName = '-';
  if(objectProfile.gender == 'M'){
    genderName = 'Male';
  }else if(objectProfile.gender == 'F'){
    genderName = 'Female';
  }else{
    genderName = 'Unknow';
  }

  /*USE HOOK*/
  const [objProfile, setObjProfile] = useState(objectProfile);
  
  const handlerSemester = (value)=>{
    setObjProfile({...objProfile, semester:value});
  }
  /*END USE HOOK*/

  return (
    <ScrollView>
      <View>
        <Text style={{ fontSize: 24 }} >Fullname:</Text>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 5 }} >{objectProfile.fullname}</Text>
      </View>
      <View>
        <Text style={{ fontSize: 24 }} >Student id:</Text>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 5 }} >{objectProfile.studentid}</Text>
      </View>
      <View style={{borderWidth:1, padding:10, margin:10}}>
        <Text style={{ fontSize: 24 }} >Semester:</Text>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 5 }} >
          {objProfile.semester}
        </Text>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
            style={{backgroundColor:'purple',paddingHorizontal:20,paddingVertical:10, margin:5}}
            onPress={(e)=>handlerSemester(++objProfile.semester)} >
            <Text style={{color:'white'}}>Plus</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor:'purple',paddingHorizontal:20,paddingVertical:10, margin:5}}
            onPress={(e)=>handlerSemester(--objProfile.semester)} >
            <Text style={{color:'white'}}>Minus</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={{ fontSize: 24 }} >GPA:</Text>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 5 }} >
          {objectProfile.gpa}
          {(objectProfile.gpa >= 3.7) ? (
            <Text style={{color:'blue'}}>Cumlaude</Text>
          ) :''}
        </Text>
      </View>
      <View style={{backgroundColor:'tomato', marginBottom:5}}>
        <Text style={{ fontSize: 24 }} >Selection diluar JSX:</Text>
        <Text style={{ fontSize: 24 }} >Gender:</Text>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 5 }} >{genderName}</Text>
      </View>
      <View style={{backgroundColor:'orange', marginBottom:5}}>
        <Text style={{ fontSize: 24 }} >Selection didalam JSX (short if):</Text>
        <Text style={{ fontSize: 24 }} >Gender:</Text>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 5 }} >
          {( objectProfile.gender == 'M' ) ? 'Pria':'Wanita' }
        </Text>
      </View>

      <View>
        <Text style={{ fontSize: 24 }} >Progress:</Text>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 5 }} >{objectProfile.percentSemester}%</Text>
      </View>
      <View>
        <Text style={{ fontSize: 24 }} >Hobby:</Text>
        {objectProfile.hobby.map((v,index)=>(
          <Text key={index} style={{ fontSize: 20, fontWeight: 'bold' }} >- {v}</Text>
        ))}
      </View>
      <View>
        <Text style={{ fontSize: 24 }} >Educations:</Text>
        {objectProfile.educations.map((v,index)=>(
          <Text key={index} style={{ fontSize: 20, fontWeight: 'bold' }} >- {v.level} {v.school} @ {v.kota}</Text>
        ))}
      </View>
      
    </ScrollView>
  )
}


export default ProfileScreen