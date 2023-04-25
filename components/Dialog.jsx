import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  Dialog,
  Portal,
  Text,
  List,
  RadioButton,
  TextInput,
} from "react-native-paper";
import { Provider as PaperProvider } from "react-native-paper";

const DialogModal = ({ visible, hideDialog }) => {
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  const [value, setValue] = React.useState("first");

  const QuizQuestions = [
    {
      id: 1,
      title: "Morning Diet",
      options: [
        "First Food Item",
        "Second Food Item",
        "Third Item",
        "Fourth Item",
        "Add Custom",
      ],
    },
    {
      id: 2,
      title: "Afternoon Diet",
      options: [
        "First Food Item",
        "Second Food Item",
        "Third Item",
        "Fourth Item",
        "Add Custom",
      ],
    },
    {
      id: 3,
      title: "Evening Diet",
      options: [
        "First Food Item",
        "Second Food Item",
        "Third Item",
        "Fourth Item",
        "Add Custom",
      ],
    },
    {
      id: 4,
      title: "Night Diet",
      options: [
        "First Food Item",
        "Second Food Item",
        "Third Item",
        "Fourth Item",
        "Add Custom",
      ],
    },
  ];

  return (
    <PaperProvider>
      <Portal>
        <Dialog
          visible={visible}
          onDismiss={hideDialog}
          style={styles.container}
        >
          <Dialog.Title>Routien Diet Quiz</Dialog.Title>
          <Dialog.ScrollArea style={styles.main_scrollview}>
            <ScrollView>
              {QuizQuestions.map((item, index) => (
                <List.Section key={index}>
                  <List.Accordion
                    title={item.title}
                    left={(props) => <List.Icon {...props} icon="food" />}
                    // onPress={handlePress}
                  >
                    <RadioButton.Group
                      onValueChange={(newValue) => setValue(newValue)}
                      value={value}
                    >
                      <View style={styles.radio_btn_main_container}>
                        {item.options.map((option, index) => (
                          <View style={styles.radio_btn_container} key={index}>
                            <RadioButton
                              value={option.toLowerCase()}
                              color="#000"
                            />
                            <Text>{option}</Text>
                          </View>
                        ))}
                        {value === "add custom" && (
                          <View className="">
                            <TextInput
                              mode="outlined"
                              label="Food Item"
                              placeholder="type food item name"
                              keyboardType="default"
                              // right={<TextInput.Affix text="/100" />}
                            />
                            <TextInput
                              mode="outlined"
                              label="Calory Count"
                              placeholder="type calory count"
                              keyboardType="numeric"
                              // right={<TextInput.Affix text="/100" />}
                            />
                          </View>
                        )}
                      </View>
                    </RadioButton.Group>
                  </List.Accordion>
                </List.Section>
              ))}
            </ScrollView>
          </Dialog.ScrollArea>
          <Dialog.Actions style={styles.option_main_container}>
            <TouchableOpacity onPress={hideDialog}>
              <Text style={styles.option_text_btn_text}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={hideDialog}>
              <Text style={styles.option_text_btn_text}>Ok</Text>
            </TouchableOpacity>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </PaperProvider>
  );
};

export default DialogModal;

const styles = StyleSheet.create({
  container: {
    marginLeft: 12,
    marginRight: 12,
    borderRadius: 12,
  },
  main_scrollview: {
    paddingLeft: 12,
    paddingRight: 12,
    height: 320,
  },
  radio_btn_container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  radio_btn_main_container: {
    padding: 12,
  },
  option_main_container: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 20,
    paddingBottom: 20,
    marginLeft: 12,
    marginRight: 12,
    marginLeft: 20,
  },
  option_text_btn_text: {
    padding: 12,
    backgroundColor: "#D1D5DB",
    textAlign: "center",
    borderRadius: 8,
    width: 80,
  },
});
