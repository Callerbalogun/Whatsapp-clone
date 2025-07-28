import { FlatList, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useSocket } from "../global/socketContext";
import { addMessage } from "../global/redux/userSlice";
import DateSurface from "../components/DateSurface";
import ChatSurface from "../components/ChatSurface";
import ChatInput from "../components/ChatInput";
import ResponsiveKeyboard from "../components/ResponsiveKeyboard";

const DmScreen = ({ route }) => {
  const { room } = route.params;
  const userId = useSelector((state) => state.user.id);
  const chat = useSelector((state) =>
    state.user.chats.find((c) => c.room === room)
  );
  const socket = useSocket();
  const dispatch = useDispatch();

  const sendMessageHandler = (text, time) => {
    const message = {
      text,
      time,
      senderId: userId,
    };

    socket.emit("send", message, room);

    dispatch(addMessage({ room, message: { ...message, isUser: true } }));
  };

  return (
    <ResponsiveKeyboard>
      <View className="flex-1 px-2 bg-primary-100">
        <DateSurface />
        <FlatList
          style={{ flex: 1, marginBottom: 8 }}
          showsVerticalScrollIndicator={true}
          showsHorizontalScrollIndicator={false}
          data={chat.message}
          keyExtractor={(_, idx) => idx.toString()}
          renderItem={({ item }) => (
            <>
              <ChatSurface isUser={item.isUser} time={item.time}>
                {item.text}
              </ChatSurface>
            </>
          )}
        />
        <ChatInput sendHandler={sendMessageHandler} />
      </View>
    </ResponsiveKeyboard>
  );
};

export default DmScreen;
