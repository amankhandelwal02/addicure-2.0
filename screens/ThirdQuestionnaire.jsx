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

const ThirdQuestionnaire = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const [goal, setGoal] = useState("");
  const [desiredGoal, setDesiredGoal] = useState("");
  const [active, setActive] = useState(false);

  console.log("desiredGoal", desiredGoal);

  const handleNextScreen = () => {
    if (goal === "" && desiredGoal === "") {
      Toast.show("Please select the option first", Toast.LONG, Toast.TOP, {
        backgroundColor: "blue",
      });
    } else {
      dispatch(
        setUser({
          goal: goal,
          desiredGoal: desiredGoal,
        })
      );
      navigation.navigate("Dashboard");
    }
  };

  const handleSelectOption = (goalType) => {
    setGoal(goalType);
    setActive(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.heading_text}>
          What goal do you have in your mind?
        </Text>
      </View>
      <View style={styles.option_container}>
        <TouchableOpacity
          style={styles.option_button}
          onPress={() => handleSelectOption("Loss Weight")}
        >
          <Text style={styles.option_button_text}>Loss Weight</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option_button}
          onPress={() => handleSelectOption("Maintain Weight")}
        >
          <Text style={styles.option_button_text}>Maintain Weight</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option_button}
          onPress={() => handleSelectOption("Gain Weight")}
        >
          <Text style={styles.option_button_text}>Gain Weight</Text>
        </TouchableOpacity>
        {active && (
          <View style={styles.option_input_container}>
            <Text style={styles.option_input_container_heading}>
              Desired Weight Goal
            </Text>
            <TextInput
              placeholder={"Enter your weight goal..."}
              keyboardType={"numeric"}
              style={styles.option_input_container_textinput}
              onChangeText={(text) => setDesiredGoal(text)}
            />
          </View>
        )}
      </View>
      <TouchableOpacity
        style={styles.next_button_container}
        onPress={() => handleNextScreen()}
      >
        <Text style={styles.next_button_container_text}>Next</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default ThirdQuestionnaire;

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
    lineHeight: 32,
  },
  option_container: {
    marginTop: 40,
    marginBottom: 40,
    marginTop: 20,
    width: "100%",
  },
  option_button: {
    padding: 40,
    backgroundColor: "#ffffff",
    width: "100%",
    borderRadius: 6,
    // boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    marginBottom: 20,
  },
  option_button_text: {
    color: "#000000",
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 600,
    textAlign: "center",
  },
  option_input_container: {
    marginTop: 20,
  },
  option_input_container_heading: {
    fontSize: 19,
    lineHeight: 28,
    fontWeight: 600,
    marginBottom: 10,
  },
  option_input_container_textinput: {
    padding: 8,
    backgroundColor: "#ffffff",
    borderRadius: 2,
  },
  next_button_container: {
    padding: 12,
    backgroundColor: "#ffffff",
    color: "#000000",
    width: "100%",
    // boxShadow:
    //   "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  },
  next_button_container_text: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 600,
    textAlign: "center",
  },
});
