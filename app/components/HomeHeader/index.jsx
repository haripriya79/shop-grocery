import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { Avatar } from "@react-native-material/core";
export default function HomeHeader() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.helloText}>Hello, John</Text>
        <Text style={styles.subText}>Good Morning</Text>
      </View>
      <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
    </View>
  );
}
