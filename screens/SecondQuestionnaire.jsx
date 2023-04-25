import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setUser } from "../slices/userSlice";
import Toast from "react-native-simple-toast";

const SecondQuestionnaire = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [sex, setSex] = useState("");

  const handleNextScreen = () => {
    if (sex === "") {
      Toast.show("Please select the option first", Toast.LONG, Toast.TOP, {
        backgroundColor: "blue",
      });
    } else {
      dispatch(
        setUser({
          sex: sex,
        })
      );
      navigation.navigate("ThirdQuestionnaire");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.heading_text}>
          What sex should we use to calculate your recommendations?
        </Text>
      </View>
      <View style={styles.option_container}>
        <TouchableOpacity
          style={styles.option_container_text}
          onPress={() => setSex("Male")}
        >
          <Text style={styles.option_container_button_text}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option_container_text}
          onPress={() => setSex("Female")}
        >
          <Text style={styles.option_container_button_text}>Female</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.next_button}
        onPress={() => handleNextScreen()}
      >
        <Text style={styles.next_button_text}>Next</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default SecondQuestionnaire;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: "#DBEAFE",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  heading_text: {
    marginTop: 40,
    fontSize: 24,
    lineHeight: 24,
    fontWeight: 600,
  },
  option_container: {
    marginTop: 40,
    marginBottom: 40,
    marginTop: 20,
    width: "100%",
  },
  option_container_text: {
    padding: 40,
    backgroundColor: "#ffffff",
    width: "100%",
    borderRadius: 6,
    marginBottom: 20,
    // boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  },
  option_container_button_text: {
    color: "#000000",
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 600,
    textAlign: "center",
  },
  next_button: {
    padding: 12,
    backgroundColor: "#ffffff",
    color: "#000000",
    width: "100%",
    // boxShadow:
    //   "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  },
  next_button_text: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 600,
    textAlign: "center",
  },
});
