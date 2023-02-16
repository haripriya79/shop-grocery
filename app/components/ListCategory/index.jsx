import React from "react";
import { FlatList, View, Text, ScrollView } from "react-native";
import { getProducts } from "../../Data/productData";
import { TextButton } from "../AppButton";
import ItemCard from "../ItemCard";
import styles from "./styles";
export default function ListCategory({ onPressSeeAll }) {
  const products = getProducts();
  return (
    <View style={styles.list}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {products.map((product) => {
          return (
            <View style={styles.scrollView} key={product.id}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.title}>{product.category}</Text>
                <TextButton
                  onPress={() => onPressSeeAll(product.id, product.category)}
                  title="See all"
                ></TextButton>
              </View>

              <FlatList
                horizontal={true}
                data={product.items}
                renderItem={({ item }) => <ItemCard item={item}></ItemCard>}
                keyExtractor={(item) => item.id}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
