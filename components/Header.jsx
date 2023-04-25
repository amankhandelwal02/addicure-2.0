import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Header = ({
  image,
  userInfo,
  navigation,
  calories,
  bmi,
  bmiValue,
  bodyFat,
  bodyFatValue,
}) => {
  return (
    <View>
      <View style={styles.heading_container}>
        <Text style={styles.heading_line}>--------------</Text>
        <Text style={styles.heading_text}>Addicure</Text>
        <Text style={styles.heading_line}>--------------</Text>
      </View>
      <View style={styles.subheading_container}>
        {/* <Image source={image} style={styles.subheading_container_image} /> */}
        <View style={styles.subheading_text_container}>
          <Text style={styles.subheading_text}>
            Hello, {userInfo?.name || "Username"}
          </Text>
          <View style={styles.subheading_icon}>
            <TouchableOpacity>
              {/* <ChevronDownIcon size={20} color="#00CCBB" /> */}
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity>
          {/* <UserIcon size={30} color="#00CCBB" /> */}
        </TouchableOpacity>
      </View>
      <View style={styles.goal_type_container}>
        <Text style={styles.goal_type_text}>
          {userInfo?.goal || "GOAL TYPE"}, is your fitness goal.
        </Text>
        {/* <Text className="font-bold text-gray-400 text-xs">
          Your current BMI is {bmi != NaN ? parseFloat(bmi).toFixed(2) : "ANY"}{" "}
          which means you are {bmiValue || "ANY"}.
        </Text>
        <Text className="font-bold text-gray-400 text-xs">
          Your current BFP is {bodyFat != NaN ? parseFloat(bodyFat).toFixed(2) : "ANY"}{" "}
          which means you are {bodyFatValue || "ANY"}.
        </Text> */}
      </View>
      <View style={styles.search_main_container}>
        <View style={styles.search_textinput_container}>
          {/* <SearchIcon color="gray" size={20} /> */}
          <TextInput
            placeholder="Search here..."
            keyboardType="default"
            style={styles.search_textinput}
          />
        </View>
        <TouchableOpacity>
          {/* <AdjustmentsIcon color="#00CCBB" /> */}
        </TouchableOpacity>
      </View>
      <View style={styles.index_main_container}>
        <View style={styles.main_index_container}>
          <Text style={styles.main_index_text}>2000</Text>
          <Text style={styles.main_index_text}>Currunt</Text>
        </View>
        <TouchableOpacity
        // onPress={() => navigation.navigate("Medical Report")}
        >
          <View style={styles.daily_calory_container}>
            <Text style={styles.main_index_text}>
              {calories || "Any Count"}
            </Text>
            <Text style={styles.main_index_text}>Daily Calories</Text>
          </View>
        </TouchableOpacity>
        <View className="flex-col items-center">
          <Text style={styles.main_index_text}>500 </Text>
          <Text style={styles.main_index_text}>Required</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  heading_container: {
    marginLeft: "auto",
    marginRight: "auto",
    marginLeft: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  heading_line: {
    color: "#9CA3AF",
  },
  heading_text: {
    color: "#9CA3AF",
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 700,
  },
  subheading_container: {
    padding: 8,
    marginLeft: 12,
    marginLeft: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  subheading_container_image: {
    padding: 16,
    backgroundColor: "#D1D5DB",
    borderRadius: 9999,
  },
  subheading_text_container: {
    flex: 1,
  },
  subheading_text: {
    color: "#9CA3AF",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 700,
  },
  subheading_icon: {
    marginLeft: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  goal_type_container: {
    marginLeft: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  goal_type_text: {
    color: "#9CA3AF",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 700,
  },
  search_main_container: {
    paddingBottom: 8,
    marginLeft: 8,
    marginRight: 8,
    marginLeft: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  search_textinput_container: {
    paddingBottom: 8,
    marginLeft: 8,
    marginRight: 8,
    marginLeft: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  search_textinput: {
    flex: 1,
  },
  index_main_container: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  main_index_container: {
    flexDirection: "column",
    alignItems: "center",
  },
  main_index_text: {
    color: "#9CA3AF",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 700,
  },
  daily_calory_container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 128,
    height: 128,
    borderRadius: 9999,
    borderWidth: 32,
    borderColor: "#9CA3AF",
  },
});
