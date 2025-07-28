import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ChatScreen from "../screens/ChatScreen";
import UpdatesScreen from "../screens/UpdatesScreen";
import CommunityScreen from "../screens/CommunityScreen";
import CallScreen from "../screens/CallScreen";
import { colors } from "../assets/colors";
import TabBarIcon from "./TabBarIcon";
import { useState } from "react";
import UserInfoModal from "./UserInfoModal";

const BottomTab = createBottomTabNavigator();

const BottomTabs = () => {
  const [modalVisible, setModalVisible] = useState(false)

  const toggleModalHandler = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <UserInfoModal visible={modalVisible} toggleModal={toggleModalHandler} />
      <BottomTab.Navigator
        screenOptions={{
          headerTitle: "WhatsApp",
          headerStyle: {
            backgroundColor: colors.primary[400],
          },
          headerTintColor: "white",
          headerRight: ({ tintColor }) => {
            return (
              <>
                <Icon
                  name="camera-outline"
                  size={24}
                  color={tintColor}
                  style={{ paddingRight: 20 }}
                />
                <Icon
                  name="magnify"
                  size={24}
                  color={tintColor}
                  style={{ paddingRight: 20 }}
                />
                <Icon
                  name="account-circle"
                  size={26}
                  color={tintColor}
                  onPress={toggleModalHandler}
                />
              </>
            );
          },
          headerRightContainerStyle: {
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingEnd: 10,
          },
          tabBarStyle: {
            height: 80,
            paddingTop: 5,
            paddingBottom: 10,
          },
          tabBarLabelStyle: {
            fontSize: 20,
            fontWeight: 600,
          },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "#727272",
        }}
      >
        <BottomTab.Screen
          name="Chats"
          component={ChatScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <TabBarIcon
                name="message-text"
                focused={focused}
                color={color}
                size={size}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Updates"
          component={UpdatesScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <TabBarIcon
                name="thought-bubble"
                focused={focused}
                color={color}
                size={size}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Communities"
          component={CommunityScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <TabBarIcon
                name="account-group"
                focused={focused}
                color={color}
                size={size}
              />
            ),
            headerRight: ({ tintColor }) => {
              return (
                <>
                  <Icon
                    name="camera-outline"
                    size={24}
                    color={tintColor}
                    style={{ paddingRight: 20 }}
                  />
                  <Icon name="dots-vertical" size={24} color={tintColor} />
                </>
              );
            },
          }}
        />
        <BottomTab.Screen
          name="Calls"
          component={CallScreen}
          options={{
            tabBarIcon: ({ color, focused, size }) => (
              <TabBarIcon
                name="phone"
                color={color}
                focused={focused}
                size={size}
              />
            ),
          }}
        />
      </BottomTab.Navigator>
    </>
  );
};

export default BottomTabs;
