import { Text, View } from "react-native";
import { Surface } from "react-native-paper";
import dayjs from "dayjs";

const DateSurface = () => {
  return (
    <View className="items-center my-2">
      <Surface className="w-fit items-center rounded-lg p-[6] bg-primary-250">
        <Text>{dayjs(new Date()).format("DD MMMM YYYY")}</Text>
      </Surface>
    </View>
  );
};

export default DateSurface;
