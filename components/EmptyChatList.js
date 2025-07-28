import { Text, View } from "react-native";

const EmptyChatList = () => {
  return (
    <View className="flex-1 justify-center items-center h-screen">
      <Text className="text-2xl ">No open chat</Text>
      <Text className="text-2xl">
        Press <Text className="text-4xl text-primary-300"> "+" </Text> to start
        new chat
      </Text>
    </View>
  );
};

export default EmptyChatList;
