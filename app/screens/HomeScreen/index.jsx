import React from "react";
import { ImageBackground, View, Image, Text, SafeAreaView } from "react-native";
import HomeHeader from "../../components/HomeHeader";
import ListCategory from "../../components/ListCategory";
import defaultStyles from "../../config/styles";
import styles from "./styles";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={[defaultStyles.AndroidSafeArea, styles.container]}>
      <View style={styles.view}>
        <HomeHeader></HomeHeader>
        <ListCategory></ListCategory>
      </View>
    </SafeAreaView>
  );
}
