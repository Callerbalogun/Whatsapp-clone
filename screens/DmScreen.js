import { View } from "react-native";
import DateSurface from "../components/DateSurface";
import { useState } from "react";
// import { SimpleRounded } from "react-native-bubble-chat";
import ChatSurface from "../components/ChatSurface";

const DmScreen = () => {
  return (
    <View className="flex-1 px-2 bg-primary-100">
      <DateSurface />
      <ChatSurface isUser={true}>Hello</ChatSurface>
      <ChatSurface isUser={true}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.ah
      </ChatSurface>
      <ChatSurface isUser={true}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est modi
        nostrum impedit reprehenderit at, repellat quod quas, quo maxime
        reiciendis quaerat ipsam? Non eos nesciunt dolore excepturi, itaque sit
        facilis provident similique? Dignissimos quae voluptate eligendi
        maiores, quaerat numquam optio ab minus, ratione quis, quisquam soluta
        cum in veniam voluptatum.
      </ChatSurface>
      <ChatSurface isUser={false}>Welcome to my channel</ChatSurface>
      <ChatSurface isUser={false}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
        voluptatem voluptas amet sunt ipsam accusamus iusto, labore temporibus
        ex tempore? jusjdhjjaokkzklaoajkklaksddjiiandajjojoo
      </ChatSurface>
      <DateSurface />
      <ChatSurface isUser={false}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ullam.
      </ChatSurface>
    </View>
  );
};

export default DmScreen;
