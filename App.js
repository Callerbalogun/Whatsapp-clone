import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import StackChat from "./components/StackedScreens";

export default function App() {
  return (
    <NavigationContainer>
      <View className="flex-1">
        <StatusBar style="light" />
        <StackChat />
      </View>
    </NavigationContainer>
  );
}
