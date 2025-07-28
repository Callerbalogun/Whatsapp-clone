import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { useEffect, useState } from "react";

const ResponsiveKeyboard = ({ children }) => {
  const [flexToggle, setFlexToggle] = useState(false);
  const headerHeight = useHeaderHeight();
  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener("keyboardDidShow", () => {
      setFlexToggle(false);
    });

    const keyboardHideListener = Keyboard.addListener("keyboardDidHide", () => {
      setFlexToggle(true);
    });

    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      style={flexToggle ? [{ flexGrow: 1 }] : [{ flex: 1 }]}
      enabled={!flexToggle}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={headerHeight}
    >
      <TouchableWithoutFeedback className="flex-1" onPress={Keyboard.dismiss}>
        {children}
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ResponsiveKeyboard;
