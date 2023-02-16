import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import colors from "../../config/colors";

function AppButton({ color = colors.primary, title, onPress }) {
  return (
    <TouchableOpacity
      style={[{ backgroundColor: color }, styles.button]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
function TextButton({ title, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ alignContent: "center", justifyContent: "center" }}
    >
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
}
function AddButton({ color = colors.primary, title, onPress }) {
  return (
    <TouchableOpacity
      style={[{ backgroundColor: color }, styles.addButton]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
export { AppButton, TextButton, AddButton };
