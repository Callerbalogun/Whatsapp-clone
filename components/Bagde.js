import { Text, View } from "react-native";

const Bagde = ({ count }) => {
  return (
    <View className="bg-primary-300 w-5 rounded-xl justify-center items-center">
      <Text className="text-neutral-50 text-xs">{count}</Text>
    </View>
  );
};

export default Bagde;
