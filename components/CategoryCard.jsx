import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CategoryCard = ({ imageUrl, title, screen }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(screen)}
    >
      <Image source={imageUrl} style={styles.image} />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginLeft: 12,
    marginRight: 12,
  },
  image: {
    width: 128,
    height: 128,
    borderRadius: 4,
  },
  test: {
    position: "absolute",
    bottom: 4,
    left: 4,
    color: "#ffffff",
    fontWeight: 700,
  },
});
