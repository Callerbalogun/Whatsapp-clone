import { useState } from "react";
import { TextInput, View } from "react-native";
import { colors } from "../assets/colors";
import dayjs from "dayjs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ChatInput = ({ sendHandler }) => {
  const [inputText, setInputText] = useState("");

  return (
    <View className="flex-row items-baseline w-full mb-3">
      <View className="flex-row flex-1 items-baseline p-2 mr-2 rounded-3xl bg-neutral-50">
        <Icon
          name="emoticon-happy-outline"
          size={25}
          style={{ marginRight: 8 }}
        />
        <TextInput
          className={`flex-1 text-lg max-h-[94px]`}
          placeholder="Message"
          placeholderTextColor="#797979"
          multiline={true}
          scrollEnabled={true}
          value={inputText}
          onChangeText={(text) => setInputText(text)}
        />
        <Icon name="paperclip" size={25} style={{ marginRight: 8 }} />
        {inputText.length < 1 && (
          <Icon
            name="camera-outline"
            size={25}
            style={{ marginHorizontal: 8 }}
          />
        )}
      </View>
      <View className="justify-center items-center h-11 w-11 rounded-full bg-primary-400">
        {inputText.length < 1 ? (
          <Icon name="microphone" size={25} color={colors.primary[50]} />
        ) : (
          <Icon
            name="send"
            size={20}
            color={colors.primary[50]}
            onPress={() => {
              setInputText("");
              sendHandler(inputText, dayjs(new Date()).format("h:mm a"));
            }}
          />
        )}
      </View>
    </View>
  );
};

export default ChatInput;
