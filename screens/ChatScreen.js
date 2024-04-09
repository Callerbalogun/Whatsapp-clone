import { ScrollView } from "react-native";
import SingleChat from "../components/SingleChat";

const ChatScreen = ({ navigation }) => {
  const openChatHandler = () => {
    navigation.navigate("Dm");
  };

  return (
    <ScrollView className="flex-1 py-1">
      {Array.from({ length: 20 }, (_, index) => (
        <SingleChat pressed={openChatHandler} key={index} />
      ))}
    </ScrollView>
  );
};

export default ChatScreen;
