import { Image, ScrollView, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SingleChat from "../components/SingleChat";

const UpdatesScreen = () => {
  return (
    <View className="flex-1">
      <ScrollView className="flex-1 py-1 bg-white" overScrollMode="always">
        <View className="flex-row py-3 pl-6 pr-2 w-full justify-between items-center">
          <Text className="text-lg">Status</Text>
          <Icon name="dots-vertical" size={24} color={"black"} />
        </View>
        <ScrollView
          className="p-4 border-b border-neutral-300"
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <View className="items-center relative">
            <View>
              <Image
                source={require("../assets/FB_IMG_1634861529430.jpg")}
                style={{
                  height: 68,
                  width: 68,
                  borderRadius: 34,
                }}
              />
              <View
                className="bg-white -bottom-1 -right-1
               absolute h-7 w-7 p-1 rounded-full items-center justify-center"
              >
                <View className="bg-primary-350 h-6 w-6 rounded-full items-center justify-center">
                  <Icon name="plus" size={21} color="white" />
                </View>
              </View>
            </View>
            <Text className="mt-2 text-xs">My status</Text>
          </View>
          {Array.from({ length: 2 }, (_, index) => (
            <View key={index} className="items-center ml-3">
              <View className="p-[2] border-2 border-neutral-400 rounded-full">
                <Image
                  source={require("../assets/Screenshot 2024-04-09 110052.png")}
                  style={{
                    height: 60,
                    width: 60,
                    borderRadius: 30,
                  }}
                />
              </View>
              <Text className="mt-2 text-xs">HouseOfShe</Text>
            </View>
          ))}
          <View className="items-center justify-center ml-3">
            <View className="rounded-full h-[68] w-[68] bg-gray-200 justify-center items-center">
              <Icon name="chevron-right" size={25} color={"#929292"} />
            </View>
            <Text className="mt-2 text-xs">Muted</Text>
          </View>
        </ScrollView>
        <View className="flex-row py-4 pl-6 pr-2 w-full justify-between items-center">
          <Text className="text-lg">Channels</Text>
          <Icon name="plus" size={24} color={"black"} />
        </View>
        {Array.from({ length: 12 }, (_, index) => (
          <SingleChat key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default UpdatesScreen;
