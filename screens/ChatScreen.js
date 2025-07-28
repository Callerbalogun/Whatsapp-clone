import { useState } from "react";
import { useSelector } from "react-redux";
import { FlatList, Text, View } from "react-native";
import SingleChat from "../components/SingleChat";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import EmptyChatList from "../components/EmptyChatList";
import CustomButton from "../components/CustomButton";
import NewMessageModal from "../components/NewMessageModal";

const ChatScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { chats } = useSelector((state) => state.user);

  const toggleModalHandler = () => {
    setModalVisible(!modalVisible);
  };
  const openChatHandler = (room) => {
    navigation.navigate("Dm", { room });
  };

  const renderItem = ({ item }) => (
    <SingleChat
      pressed={() => openChatHandler(item.room)}
      key={item.room}
      room={item.room}
      lastMessage={item.message[item.message.length - 1]}
    />
  );
  const renderFooter = () =>
    chats.length > 0 && (
      <View className="flex-row h-40 justify-center items-center border-t border-gray-200">
        <Icon name="lock" size={15} color={"#636363"} />
        <Text className="ml-1 text-gray-500">
          Your personal chats are{" "}
          <Text className="text-primary-350">end-to-end encrypted</Text>
        </Text>
      </View>
    );

  return (
    <>
      <FlatList
        className="flex-1 py-1 bg-white"
        data={chats}
        renderItem={renderItem}
        ListEmptyComponent={EmptyChatList}
        keyExtractor={(item) => item.room}
        ListFooterComponent={renderFooter}
      />
      <NewMessageModal
        toggleModal={toggleModalHandler}
        visible={modalVisible}
        navigation={navigation}
      />
      <CustomButton toggleModal={toggleModalHandler}>+</CustomButton>
    </>
  );
};

export default ChatScreen;
