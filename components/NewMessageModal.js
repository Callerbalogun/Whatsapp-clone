import { useState } from "react";
import { Alert, Modal, Text, TextInput, View } from "react-native";
import { Button } from "react-native-paper";
import { colors } from "../assets/colors";
import { useDispatch } from "react-redux";
import { startChat } from "../global/redux/userSlice";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ResponsiveKeyboard from "./ResponsiveKeyboard";

const NewMessageModal = ({ toggleModal, visible, navigation }) => {
  const [enteredId, setEnteredId] = useState("");
  const dispatch = useDispatch();

  const startChatHandler = () => {
    if (enteredId === "") {
      Alert.alert("Please enter a valid user ID.");
      return;
    }
    dispatch(startChat({ room: enteredId }));
    toggleModal();
    setEnteredId("");
    navigation.navigate("Dm", {
      room: enteredId,
    });
  };

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          toggleModal();
          setEnteredId("");
        }}
      >
        <ResponsiveKeyboard>
          <View className="flex-1">
            <View className="mt-[50%] p-2 w-1/2 rounded-2xl bg-primary-250 absolute left-1/4">
              <View className="w-9">
                <Icon
                  name="close-thick"
                  color="#075e54"
                  size={32}
                  onPress={() => {
                    toggleModal(), setEnteredId("");
                  }}
                />
              </View>
              <View className="flex-row p-3 mb-5 items-center">
                <Text className="text-bold text-xl">User ID: </Text>
                <TextInput
                  className="h-12 p-2 border-2 border-black w-40 rounded-md text-xl"
                  focusable
                  onChangeText={(text) => setEnteredId(text.trim())}
                  value={enteredId}
                />
              </View>
              <Button
                style={{
                  padding: 8,
                  backgroundColor: colors.primary[350],
                  marginBottom: 8,
                }}
                onPress={startChatHandler}
              >
                <Text className="text-2xl text-white">Start chat</Text>
              </Button>
            </View>
          </View>
        </ResponsiveKeyboard>
      </Modal>
    </>
  );
};

export default NewMessageModal;
