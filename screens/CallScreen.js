import { ScrollView, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SingleElement from "../components/SingleElement";

const CallScreen = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-row p-4">
        <View className="justify-center items-center h-12 w-12 rounded-full bg-primary-350">
          <Icon name="link" size={24} color="white" />
        </View>
        <View className="ml-4 justify-center">
          <Text className="text-lg">Create call link</Text>
          <Text className="text-gray-500">
            Share a link for your WhatsApp call
          </Text>
        </View>
      </View>
      <Text className="px-4 py-2 my-2">Recent</Text>
      <View className="border-b border-gray-200">
        {Array.from({ length: 10 }, (_, index) => (
          <SingleElement key={index} />
        ))}
      </View>
      <View className="flex-row h-20 justify-center items-center">
        <Icon name="lock" size={15} color={"#636363"} />
        <Text className="ml-1 text-gray-500">
          Your personal calls are{" "}
          <Text className="text-primary-350">end-to-end encrypted</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default CallScreen;
