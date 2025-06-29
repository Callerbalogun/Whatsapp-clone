import {
  FlatList,
  KeyboardAvoidingView,
  View,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import DateSurface from "../components/DateSurface";
import { useEffect, useState } from "react";
import ChatSurface from "../components/ChatSurface";
import ChatInput from "../components/ChatInput";

const DmScreen = () => {
  const [message, setMessage] = useState([]);
  const [flexToggle, setFlexToggle] = useState(false);
  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener("keyboardDidShow", () => {
      setFlexToggle(false);
    });

    const keyboardHideListener = Keyboard.addListener("keyboardDidHide", () => {
      setFlexToggle(true);
    });

    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  }, []);

  const sendMessageHandler = (text, time, isUser) => {
    setMessage((prev) => [...prev, { text: text, time: time, isUser: true }]);
  };

  const headerHeight = useHeaderHeight();

  return (
    <KeyboardAvoidingView
      style={flexToggle ? [{ flexGrow: 1 }] : [{ flex: 1 }]}
      enabled={!flexToggle}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : headerHeight}
    >
      <TouchableWithoutFeedback>
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
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default DmScreen;
