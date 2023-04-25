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
// import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

const FirstQuestionnaire = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.log("A date has been picked: ", date);
    // console.log("A date has been picked: ", moment(date).format('LL'));
    setDob(moment(date).format("LL"));
    hideDatePicker();
  };

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [foot, setFoot] = useState("");
  const [inches, setInches] = useState("");
  const [dob, setDob] = useState("");

  const handleNextScreen = () => {
    // if (
    //   name === "" ||
    //   // age === "" ||
    //   weight === "" ||
    //   foot === "" ||
    //   inches === "" ||
    //   dob === ""
    // ) {
    //   Toast.show("Please select the required fields", Toast.LONG, Toast.TOP, {
    //     backgroundColor: "blue",
    //   });
    // } else {
    //   dispatch(
    //     setUser({
    //       name: name,
    //       // age: age,
    //       weight: weight,
    //       height: { foot: foot, inches: inches },
    //       dob: dob,
    //     })
    //   );
    navigation.navigate("SecondQuestionnaire");
    // }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View className="">
        <Text style={styles.heading_text}>Addicure</Text>
        <Text style={styles.subheading_text}>Personal Information</Text>
      </View>
      <View style={styles.input_container}>
        <InputFields
          Title={"Name"}
          Placeholder={"Please enter your name..."}
          onChangeText={(text) => setName(text)}
          type={"default"}
        />
        {/* <InputFields
          Title={"Age"}
          Placeholder={"Please enter your age..."}
          onChangeText={(text) => setAge(text)}
          type={"numeric"}
        /> */}
        <InputFields
          Title={"Weight"}
          Placeholder={"Please enter your weight in KG..."}
          onChangeText={(text) => setWeight(text)}
          type={"numeric"}
        />
        <View style={styles.input_comp_height_container}>
          <Text style={styles.input_comp_text}>Height</Text>
          {/* <View style={styles.input_height_container}> */}
          <TextInput
            placeholder="Enter Foot..."
            keyboardType="numeric"
            style={styles.height_input_textinput}
            onChangeText={(text) => setFoot(text)}
          />
          <TextInput
            placeholder="Enter Inches..."
            keyboardType="numeric"
            style={styles.height_input_textinput}
            onChangeText={(text) => setInches(text)}
          />
          {/* </View> */}
        </View>
        {/* <InputFields
          Title={"Date Of Birth"}
          Placeholder={"Please enter your DOB..."}
          onChangeText={(text) => setDob(text)}
          type={"default"}
        /> */}
        <View>
          <Text style={styles.input_comp_text}>Date of Birth</Text>
          {/* <Button title="Please enter your DOB" onPress={showDatePicker} /> */}
          <TouchableOpacity
            style={styles.dob_container}
            onPress={() => showDatePicker()}
          >
            <Text style={styles.dob_container_text}>
              {dob === "" ? "Please enter your DOB" : dob}
            </Text>
          </TouchableOpacity>
          {/* <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          /> */}
        </View>
      </View>
      <TouchableOpacity
        style={styles.next_button_container}
        onPress={() => handleNextScreen()}
      >
        <Text style={styles.next_button_text}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.shortcut_button_container}
        onPress={() => handleNextScreen()}
      >
        <Text
          style={styles.shortcut_button_text}
          onPress={() => navigation.navigate("Dashboard")}
        >
          Shortcut To Dashboard
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default FirstQuestionnaire;

const InputFields = ({ Title, Placeholder, onChangeText, type }) => {
  return (
    <View style={styles.input_comp_container}>
      <Text style={styles.input_comp_text}>{Title}</Text>
      <TextInput
        placeholder={Placeholder}
        keyboardType={type}
        style={styles.input_textinput}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: "#DBEAFE",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  heading_text: {
    fontSize: 24,
    lineHeight: 24,
    fontWeight: 600,
  },
  subheading_text: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 600,
  },
  input_container: {
    marginTop: 20,
    marginBottom: 20,
    width: "100%",
  },
  input_comp_height_container: {
    marginBottom: 50,
    // marginTop: 8,
  },
  input_comp_container: {
    marginBottom: 20,
    marginTop: 8,
  },
  input_comp_text: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 600,
    marginBottom: 5,
  },
  input_textinput: {
    padding: 8,
    backgroundColor: "#ffffff",
    borderRadius: 2,
  },
  input_height_container: {
    // marginLeft: 20,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  height_input_textinput: {
    padding: 20,
    backgroundColor: "#ffffff",
    borderRadius: 2,
    width: 150,
  },
  dob_container: {
    padding: 12,
    marginTop: 12,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    // boxShadow:
    //   "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    width: 200,
  },
  dob_container_text: {
    padding: 12,
    // marginTop: 12,
    // backgroundColor: "#ffffff",
    borderRadius: 8,
    // boxShadow:
    //   "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    // width: 200,
  },
  next_button_container: {
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
  shortcut_button_container: {
    padding: 28,
    marginTop: 20,
    backgroundColor: "#ffffff",
    color: "#000000",
    width: "100%",
    // boxShadow:
    //   "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  },
  shortcut_button_text: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 600,
    textAlign: "center",
  },
});
