import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import {
  Dialog,
  Portal,
  Text,
  List,
  RadioButton,
  TextInput,
} from "react-native-paper";
import { Provider as PaperProvider } from "react-native-paper";
import Toast from "react-native-simple-toast";

const UpdateInfoDialog = ({ visible, hideDialog, infoType }) => {
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  const [value, setValue] = React.useState("first");

  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [foot, setFoot] = useState("");
  const [inches, setInches] = useState("");
  const [dob, setDob] = useState("");
  const [sex, setSex] = useState("");
  const [goal, setGoal] = useState("");
  const [desiredGoal, setDesiredGoal] = useState("");

  const handleUpdateInfo = () => {
    console.log("infoType", infoType.toLowerCase());
    switch (infoType.toLowerCase()) {
      case "name":
        if (name === "") {
          Toast.show("Please enter a name");
        } else {
          console.log("name", name);
          hideDialog();
        }
        break;
      case "weight":
        if (weight === "") {
          Toast.show("Please enter a weight");
        } else {
          console.log("weight", weight);
          hideDialog();
        }
        break;
      case "height":
        if (foot === "" || inches === "") {
          Toast.show("Please enter a height");
        } else {
          console.log("height", `${foot} ft ${inches} in`);
          hideDialog();
        }
        break;
      case "dob":
        if (dob === "") {
          Toast.show("Please enter a date of birth");
        } else {
          console.log("dob", dob);
          hideDialog();
        }
        break;
    }
  };

  return (
    <PaperProvider>
      <Portal>
        <Dialog
          visible={visible}
          onDismiss={hideDialog}
          style={styles.container}
        >
          <Dialog.Title>Update {infoType}</Dialog.Title>
          <Dialog.ScrollArea style={styles.scroll_main_container}>
            <TextInput
              mode="outlined"
              label={`${infoType}`}
              placeholder={`Enter ${infoType}...`}
              keyboardType="numeric"
              // right={<TextInput.Affix text="/100" />}
            />
          </Dialog.ScrollArea>
          <Dialog.Actions style={styles.option_text_main_container}>
            <TouchableOpacity onPress={hideDialog}>
              <Text style={styles.option_text}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleUpdateInfo()}>
              <Text style={styles.option_text}>Ok</Text>
            </TouchableOpacity>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </PaperProvider>
  );
};

export default UpdateInfoDialog;

const styles = StyleSheet.create({
  container: {
    marginLeft: 12,
    marginRight: 12,
    borderRadius: 12,
    marginBottom: 250,
  },
  scroll_main_container: {
    paddingLeft: 12,
    paddingRight: 12,
    height: 120,
  },
  option_text_main_container: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 20,
    paddingBottom: 20,
    marginLeft: 12,
    marginRight: 12,
    marginLeft: 20,
  },
  option_text: {
    padding: 12,
    backgroundColor: "#D1D5DB",
    textAlign: "center",
    borderRadius: 8,
    width: 80,
  },
});
