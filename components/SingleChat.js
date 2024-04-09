import { Image, Pressable, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Bagde from "./Bagde";

const SingleChat = ({ pressed }) => {
  return (
    <Pressable
      className="p-3 flex-row w-screen text-ellipsis"
      android_ripple={{ color: "#c0c0c0" }}
      onPress={pressed}
    >
      <View className="w-[15%]">
        <Image
          source={require("../assets/FB_IMG_1634861529430.jpg")}
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
          }}
        />
      </View>
      <View className="w-[85%] py-2">
        <View className="flex-row justify-between">
          <Text className="text-lg">Callerbalogun</Text>
          <Text>9:43 am</Text>
        </View>
        <View className="flex-row pr-2">
          <Text numberOfLines={1} className="flex-1 text-base text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In maxime
            dolorem non, aliquam repellendus velit mollitia perspiciatis quia
            quaerat, nihil debitis dolore quas necessitatibus beatae, culpa
            alias assumenda voluptatum accusamus. Corporis, esse optio. Aliquid
            est quo omnis neque nihil voluptates!
          </Text>
          <View className="flex-row pl-2">
            <Icon
              name="volume-off"
              size={19}
              color={"#919191"}
              //   style={{ marginHorizontal: 4 }}
            />
            <Icon
              name="pin"
              size={19}
              color={"#919191"}
              style={{ marginHorizontal: 6 }}
            />
            <Bagde count={"2"} />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default SingleChat;
