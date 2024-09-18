import {
  FlatList,
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import DateSurface from "../components/DateSurface";
import { useState } from "react";
import ChatSurface from "../components/ChatSurface";
import ChatInput from "../components/ChatInput";

const DmScreen = () => {
  const [message, setMessage] = useState([]);
  const sendMessageHandler = (text, time, isUser) => {
    setMessage((prev) => [...prev, { text: text, time: time, isUser: true }]);
  };

  return (
    <KeyboardAvoidingView className="flex-1" behavior="height">
      <View className="flex-1 px-2 bg-primary-100">
        <DateSurface />
        <FlatList
          className="flex-1 mb-2"
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={message}
          renderItem={({ item, index }) => (
            <>
              <ChatSurface isUser={item.isUser} time={item.time} key={index}>
                {item.text}
              </ChatSurface>
            </>
          )}
        />
        <ChatInput sendHandler={sendMessageHandler} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default DmScreen;
