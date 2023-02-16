import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./app/screens/HomeScreen";
import Welcome from "./app/screens/WelcomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CategoryList from "./app/screens/CategoryListScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="categoryList"
          component={CategoryList}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
