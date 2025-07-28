import { createStackNavigator } from "@react-navigation/stack";
import { useEffect } from "react";
import { useSocket } from "../global/socketContext";
import { useDispatch } from "react-redux";
import { addMessage, setUserId } from "../global/redux/userSlice";
import { colors } from "../assets/colors";
import DmScreen from "../screens/DmScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import BottomTabs from "./BottomTabs";

const Stack = createStackNavigator();

const StackChat = () => {
  const socket = useSocket();
  const dispatch = useDispatch();
  useEffect(() => {
    const handleConnect = () => {
      if (socket.id) {
        dispatch(setUserId(socket.id));
      }
    };
    const handleReceive = (message) => {
      const isUser = message.senderId === socket.id;
      dispatch(
        addMessage({
          room: message.senderId,
          message: { ...message, isUser },
        })
      );
    };

    socket.on("connect", handleConnect);
    socket.on("receive", handleReceive);

    return () => {
      socket.off("connect", handleConnect);
      socket.off("receive", handleReceive);
    };
  }, [socket, dispatch]);

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
