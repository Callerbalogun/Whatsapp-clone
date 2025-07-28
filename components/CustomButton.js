import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../assets/colors";

const CustomButton = ({ toggleModal }) => {
  return (
    <View className="absolute bottom-[10%] right-[10%] bg-primary-350 w-16 h-16 justify-center items-center rounded-xl">
      <Icon
        name="message-plus"
        size={38}
        color={colors.primary[100]}
        onPress={toggleModal}
      />
    </View>
  );
};

export default CustomButton;
