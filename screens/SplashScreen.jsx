import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { selectUser } from "../slices/userSlice";
import { useSelector } from "react-redux";

const SplashScreen = () => {
  const navigation = useNavigation();

  const userInfo = useSelector(selectUser);
  console.log("userInfo", userInfo);

  useEffect(() => {
    setTimeout(() => {
      if (
        userInfo?.name == null &&
        userInfo?.dob == null &&
        userInfo?.sex == null &&
        userInfo?.height == null &&
        userInfo?.weight == null &&
        userInfo?.goal == null
      ) {
        navigation.navigate("FirstQuestionnaire");
      } else {
        navigation.navigate("Dashboard");
      }
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View className="">
        <Text style={styles.heading_text}>Addicure</Text>
        <Text style={styles.subheading_text}>AI Health Assistant</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading_text: {
    fontSize: 40,
    lineHeight: 40,
    fontWeight: 600,
    textAlign: "center",
  },
  subheading_text: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 600,
    textAlign: "center",
  },
});
