import { Image, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { colors } from "../assets/colors";

const CommunityScreen = () => {
  return (
    <View className="flex-1 bg-white p-4">
      <View className="h-64">
        <Image
          source={require("../assets/community logo.png")}
          style={{ height: "100%", width: "100%" }}
        />
      </View>
      <View>
        <Text className="text-lg text-center">
          Stay connected with a community
        </Text>
        <Text className="text-center my-4">
          Communities bring members together in topic-based groups, and make it
          easy to get admin announcements. Any community you're added to will
          appear here.
        </Text>
      </View>
      <View className="items-center">
        <Button
          mode="contained"
          buttonColor={colors.primary[400]}
          onPress={() => {}}
          className="w-[95%]"
        >
          Start your community
        </Button>
      </View>
    </View>
  );
};

export default CommunityScreen;
