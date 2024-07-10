import "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import StackChat from "./components/StackedScreens";

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <View className="flex-1">
          <StatusBar style="light" />
          <StackChat />
        </View>
      </NavigationContainer>
    </PaperProvider>
  );
}
