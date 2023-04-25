import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const FoodCard = ({ imageUrl, title, screen }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      // onPress={() => navigation.navigate(screen)}
    >
      <Image source={imageUrl} style={styles.image} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginLeft: 4,
    marginRight: 4,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 4,
  },
  text: {
    position: "absolute",
    bottom: 0,
    left: 4,
    fontWeight: 700,
  },
});
