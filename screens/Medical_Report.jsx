import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { selectUser } from "../slices/userSlice";
import { useSelector } from "react-redux";
import { selectMedical } from "../slices/medicalSlice";
import UpdateInfoDialog from "../components/UpdateInfoDialog";

const Medical_Report = () => {
  const userInfo = useSelector(selectUser);
  const medicalInfo = useSelector(selectMedical);

  console.log("medicalInfo", medicalInfo);

  console.log("userInfo", userInfo);

  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  // let age = calculateAge(userInfo?.dob);

  const BasicInfo = [
    {
      id: 1,
      title: "Name",
      info: userInfo?.name || "ANY",
    },
    {
      id: 2,
      title: "Age",
      info: calculateAge(userInfo?.dob) || "ANY",
    },
    {
      id: 3,
      title: "Current weight",
      info: userInfo?.weight || "ANY",
    },
    {
      id: 4,
      title: "Height",
      info: `${userInfo?.height?.foot || "ANY"} ft ${
        userInfo?.height?.inches || "ANY"
      } in`,
    },
    {
      id: 5,
      title: "Date of Birth",
      info: userInfo?.dob || "ANY",
    },
    {
      id: 6,
      title: "Gender",
      info: userInfo?.sex || "ANY",
    },
  ];

  const AdvanceInfo = [
    {
      id: 1,
      title: "BMI",
      info: medicalInfo?.bmi?.toFixed(2) || "ANY",
    },
    {
      id: 2,
      title: "BMI Value",
      info: medicalInfo?.bmiValue || "ANY",
    },
    {
      id: 3,
      title: "BFP",
      info: medicalInfo?.bfp?.toFixed(2) || "ANY",
    },
    {
      id: 4,
      title: "BFP Value",
      info: medicalInfo?.bfpValue || "ANY",
    },
  ];

  const [visible, setVisible] = React.useState(false);
  const hideDialog = () => setVisible(false);
  const [infoType, setInfoType] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      {visible && (
        <UpdateInfoDialog
          visible={visible}
          hideDialog={hideDialog}
          infoType={infoType}
        />
      )}
      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: 30,
        }}
        className="-z-10"
      >
        <View>
          <View style={styles.main_title_container}>
            <Text style={styles.main_title}>Your Goal</Text>
          </View>
          <View style={styles.first_main_container}>
            <TouchableOpacity
              onPress={() => {
                setInfoType("Goal");
                setVisible(true);
              }}
            >
              <View style={styles.first_block}>
                <Text style={styles.first_block_title}>Goal</Text>
                <Text style={styles.first_block_title_text}>
                  {userInfo?.goal || "ANY"}
                </Text>
              </View>
            </TouchableOpacity>
            <View style={styles.saprator}></View>
            <TouchableOpacity
              onPress={() => {
                setInfoType("Gain Weight");
                setVisible(true);
              }}
            >
              <View style={styles.first_block}>
                <Text style={styles.first_block_title}>
                  {userInfo?.goal || "ANY"}
                </Text>
                <Text style={styles.first_block_title_text}>
                  {userInfo?.desiredGoal} kg
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={styles.main_title_container}>
            <Text style={styles.main_title}>Medical Info</Text>
          </View>
          <View style={styles.info_tabs_container}>
            {AdvanceInfo.map((item) => (
              <InfoTabs
                key={item.id}
                Title={item.title}
                Info={item.info}
                id={item.id}
                onPress={() => {
                  setInfoType(item.title);
                  setVisible(true);
                }}
              />
            ))}
          </View>
        </View>
        <View>
          <View style={styles.main_title_container}>
            <Text style={styles.main_title}>Details</Text>
          </View>
          <View style={styles.info_tabs_container}>
            {BasicInfo.map((item) => (
              <InfoTabs
                key={item.id}
                Title={item.title}
                Info={item.info}
                id={item.id}
                onPress={() => {
                  setInfoType(item.title);
                  setVisible(true);
                }}
              />
            ))}
          </View>
        </View>
        <TouchableOpacity style={styles.update_btn_container}>
          <Text style={styles.update_btn_container_text}>Update</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Medical_Report;

const InfoTabs = ({ Title, Info, id, onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.first_block}>
          <Text style={styles.first_block_title}>{Title}</Text>
          <Text style={styles.first_block_title_text}>{Info}</Text>
        </View>
      </TouchableOpacity>
      <View
        // className={`h-[1px] w-full bg-gray-800 ${
        //   (Title === "Gender" || Title === "BFP Value") && "hidden"
        // }`}
        style={
          Title === "Gender" || Title === "BFP Value"
            ? { ...styles.saprator, display: "none" }
            : { ...styles.saprator }
        }
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: "#DBEAFE",
    height: 100,
  },
  main_title_container: {
    marginTop: -32,
  },
  main_title: {
    color: "#374151",
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 600,
  },
  first_main_container: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 12,
    backgroundColor: "#ffffff",
    borderRadius: 12,
  },
  first_block: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  first_block_title: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 600,
    flex: 1,
  },
  first_block_title_text: {
    fontSize: 16,
    lineHeight: 24,
  },
  saprator: {
    backgroundColor: "#1F2937",
    width: "100%",
    height: 1,
  },
  info_tabs_container: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 12,
    backgroundColor: "#ffffff",
    borderRadius: 12,
  },
  update_btn_container: {
    padding: 12,
    marginTop: 40,
    marginBottom: 40,
    backgroundColor: "#ffffff",
    width: "100%",
  },
  update_btn_container_text: {
    color: "#000000",
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 600,
    textAlign: "center",
  },
});
