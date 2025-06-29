import "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import StackChat from "./components/StackedScreens";

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }} edges={["bottom"]}>
        <NavigationContainer>
          <View className="flex-1">
            <StatusBar style="light" />
            <StackChat />
          </View>
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
}
