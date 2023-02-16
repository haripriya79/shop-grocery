import React from "react";
import { View, Text, TextComponent } from "react-native";
import styles from "./styles";
import { Image } from "react-native-expo-image-cache";
import { AddButton } from "../AppButton";

export default function ItemCard({ item }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} uri={item.imageUrl} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.subTitle}>{item.unit}</Text>
      <View style={styles.view}>
        <Text style={styles.price}>{`Rs. ${item.price}`}</Text>
        <AddButton onPress={() => {}} title={"+"}></AddButton>
      </View>
    </View>
  );
}
