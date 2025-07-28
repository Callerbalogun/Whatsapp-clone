import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    chats: [],
  },
  reducers: {
    setUserId: (state, action) => {
      state.id = action.payload;
    },
    startChat: (state, action) => {
      const { room } = action.payload;
      if (!state.chats.find((chat) => chat.room === room)) {
        state.chats.push({ room, message: [] });
      }
    },
    addMessage: (state, action) => {
      const { room, message } = action.payload;
      const chat = state.chats.find((chat) => chat.room === room);
      if (chat) {
        chat.message.push(message);
      }
    },
  },
});

export const { setUserId, addMessage, startChat } = userSlice.actions;
export default userSlice.reducer;
