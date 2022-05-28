import { FlatList } from "react-native";
import React from "react";
import CoursesData from "../../../consts/CoursesData";
import CourseItem from "./CourseItem";

export default function ScoreFlatList() {
  
  return (
    <FlatList
      data={CoursesData}
      horizontal={false}
      renderItem={({ item }) => <CourseItem item={item} />}
    />
  );
}
