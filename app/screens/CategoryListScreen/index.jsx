import React from "react";
import { View, FlatList, SafeAreaView } from "react-native";
import ItemCard from "../../components/ItemCard";
import defaultStyles from "../../config/styles";
import { getProductById } from "../../Data/productData";
import styles from "./styles";

export default function CategoryList({ navigation, route }) {
  const product = getProductById(route.params.id);
  return (
    <SafeAreaView style={[defaultStyles.AndroidSafeArea, styles.container]}>
      <View style={styles.view}>
        <FlatList
          numColumns={2}
          data={product.items}
          renderItem={({ item }) => <ItemCard item={item}></ItemCard>}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}
