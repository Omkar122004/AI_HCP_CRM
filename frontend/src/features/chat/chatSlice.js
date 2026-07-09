import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [
    {
      sender: "welcome",
      text: 'Log interaction details here (e.g. "Met Dr. Smith, discussed Product X efficacy, positive sentiment, shared brochure") or ask for help.',
    },
  ],
};

const chatSlice = createSlice({
  name: "chat",

  initialState,

  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },

    clearMessages: (state) => {
      state.messages = [
        {
          sender: "welcome",
          text: 'Log interaction details here (e.g. "Met Dr. Smith, discussed Product X efficacy, positive sentiment, shared brochure") or ask for help.',
        },
      ];
    },
  },
});

export const { addMessage, clearMessages } = chatSlice.actions;

export default chatSlice.reducer;
