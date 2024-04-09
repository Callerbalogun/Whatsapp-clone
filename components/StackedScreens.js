import { createStackNavigator } from "@react-navigation/stack";
import DmScreen from "../screens/DmScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../assets/colors";
import BottomTabs from "./BottomTabs";

const Stack = createStackNavigator();

const StackChat = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={BottomTabs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Dm"
        component={DmScreen}
        options={{
          title: "WhatsApp",
          headerStyle: {
            backgroundColor: colors.primary[400],
          },
          headerTintColor: "white",
          headerRight: ({ tintColor }) => {
            return (
              <>
                <Icon
                  name="video"
                  size={24}
                  color={tintColor}
                  style={{ paddingRight: 20 }}
                />
                <Icon
                  name="phone"
                  size={24}
                  color={tintColor}
                  style={{ paddingRight: 20 }}
                />
                <Icon name="dots-vertical" size={24} color={tintColor} />
              </>
            );
          },
          headerRightContainerStyle: {
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingEnd: 10,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default StackChat;
