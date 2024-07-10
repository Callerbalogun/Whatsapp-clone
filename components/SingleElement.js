import { Image, Pressable, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../assets/colors";

const SingleElement = ({ pressed }) => {
  return (
    <View>
      <Pressable
        className="px-4 py-2 flex-row w-full"
        android_ripple={{ color: "#c0c0c0" }}
        onPress={pressed}
      >
        <View className="w-[15%]">
          <Image
            source={require("../assets/Screenshot 2024-04-09 110052.png")}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
            }}
          />
        </View>
        <View className="w-[80%] py-2">
          <View>
            <Text className="text-lg">HouseOfShe</Text>
          </View>
          <View className="flex-row pr-2">
            <Icon
              name="arrow-top-right"
              size={18}
              color={colors.primary[350]}
            />
            <Text className="flex-1 text-base text-gray-500 ml-2">
              Yesterday
            </Text>
          </View>
        </View>
        <View className="justify-center items-center">
          <Icon name="phone" size={25} color={colors.primary[350]} />
        </View>
      </Pressable>
    </View>
  );
};

export default SingleElement;
