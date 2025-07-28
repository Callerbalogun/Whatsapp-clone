import { View } from "react-native";
import { Provider } from "react-redux";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { SocketProvider } from "./global/socketContext";
import "react-native-gesture-handler";
import StackChat from "./components/StackedScreens";
import store from "./global/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <SocketProvider>
        <PaperProvider>
          <SafeAreaView style={{ flex: 1 }} edges={["bottom"]}>
            <NavigationContainer>
              <View className="flex-1">
                <StatusBar style="inverted" />
                <StackChat />
              </View>
            </NavigationContainer>
          </SafeAreaView>
        </PaperProvider>
      </SocketProvider>
    </Provider>
  );
}
