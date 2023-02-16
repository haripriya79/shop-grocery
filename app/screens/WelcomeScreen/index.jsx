import React from "react";

import { View, Image, Text } from "react-native";
import styles from "./styles";
import defaultStyles from "../../config/styles";
import AppButton from "../../components/AppButton";

export default function Welcome({ navigation }) {
  const onPress = () =>
    navigation.reset({
      index: 0,
      routes: [{ name: "home" }],
    });
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/welcome-image.png")}
        styles={styles.upperImage}
      ></Image>
      <Image
        source={require("../../assets/icon1.png")}
        styles={styles.upperImage}
      ></Image>
      <Text
        style={[defaultStyles.textSemiBold, styles.text]}
      >{`Welcome \nto our store`}</Text>
      <AppButton title="Get Started" onPress={onPress}></AppButton>
    </View>
  );
}
