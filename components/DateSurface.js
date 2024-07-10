import { Text, View } from "react-native";
import { Surface } from "react-native-paper";

const DateSurface = () => {
  return (
    <View className="items-center my-2">
      <Surface className="w-fit items-center rounded-lg p-[6] bg-primary-250">
        <Text>22 March 2024</Text>
      </Surface>
    </View>
  );
};

export default DateSurface;
