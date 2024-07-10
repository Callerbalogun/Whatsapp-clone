import { ScrollView, Text, View } from "react-native";
import SingleChat from "../components/SingleChat";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ChatScreen = ({ navigation }) => {
  const openChatHandler = () => {
    navigation.navigate("Dm");
  };

  return (
    <ScrollView className="flex-1 py-1 bg-white">
      <View className="border-b border-gray-200">
        {Array.from({ length: 20 }, (_, index) => (
          <SingleChat pressed={openChatHandler} key={index} />
        ))}
      </View>
      <View className="flex-row h-40 justify-center items-center">
        <Icon name="lock" size={15} color={"#636363"} />
        <Text className="ml-1 text-gray-500">
          Your personal chats are{" "}
          <Text className="text-primary-350">end-to-end encrypted</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default ChatScreen;
