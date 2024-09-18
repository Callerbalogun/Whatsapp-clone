import { FlatList, ScrollView, Text, View } from "react-native";
import SingleChat from "../components/SingleChat";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ChatScreen = ({ navigation }) => {
  const openChatHandler = () => {
    navigation.navigate("Dm");
  };
  const data = Array.from({ length: 20 }, (_, index) => ({
    id: index.toString(),
  }));

  const renderItem = ({ item }) => (
    <SingleChat pressed={openChatHandler} key={item.id} />
  );
  const renderFooter = () => (
    <View className="flex-row h-40 justify-center items-center border-t border-gray-200">
      <Icon name="lock" size={15} color={"#636363"} />
      <Text className="ml-1 text-gray-500">
        Your personal chats are{" "}
        <Text className="text-primary-350">end-to-end encrypted</Text>
      </Text>
    </View>
  );

  return (
    <FlatList
      className="flex-1 py-1 bg-white"
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListFooterComponent={renderFooter}
    />
  );
};

export default ChatScreen;
