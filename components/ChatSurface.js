import { StyleSheet, Text, View } from "react-native";
import { Surface } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ChatSurface = ({ isUser, children }) => {
  // console.log(children.length);

  return (
    <>
      {isUser ? (
        <View className="self-end bg-primary-200 p-3 rounded-2xl mt-1 mr-[3%] max-w-[80%]">
          <View className="flex-row w-full">
            <Text
              className={`mr-3 ${children.length <= 70 ? "max-w-[80%]" : ""}`}
            >
              {children}
            </Text>
            <View
              className={`flex-row h-4 items-end ${
                children.length > 70 ? "absolute -bottom-1 right-0" : ""
              }`}
            >
              <Text className="text-xs text-gray-500 px-1">9:40 am</Text>
              <Icon name="check-all" size={20} color="grey" />
            </View>
          </View>
          <View className="absolute -right-3 bg-primary-200 w-8 h-4 rounded-bl-3xl"></View>
          <View className="absolute -right-5 bg-primary-100 w-5 h-8 rounded-tl-2xl"></View>
        </View>
      ) : (
        <View className="self-start bg-neutral-50 p-3 rounded-2xl mt-1 ml-[3%] max-w-[80%]">
          <View className="flex-row w-full">
            <Text className={`${children.length <= 65 ? "max-w-[80%]" : ""}`}>
              {children}
            </Text>
            <View
              className={`flex-row h-4 items-end ${
                children.length > 65 ? "absolute -bottom-1 right-0" : ""
              }`}
            >
              <Text className="text-xs text-gray-500 px-1">9:40 am</Text>
            </View>
          </View>
          <View className="absolute -left-3 bg-neutral-50 w-8 h-4 rounded-br-3xl"></View>
          <View className="absolute -left-5 bg-primary-100 w-5 h-8 rounded-tr-2xl"></View>
        </View>
      )}
    </>
  );
};

export default ChatSurface;
