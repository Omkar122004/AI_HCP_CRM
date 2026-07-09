import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hcpName: "",
  interactionType: "",
  meetingDate: "",
  meetingTime: "",
  attendees: "",
  discussion: "",
  materials: "",
  samples: "",
  sentiment: "",
  outcomes: "",
  followUp: "",
};

const interactionSlice = createSlice({
  name: "interaction",
  initialState,

  reducers: {
    updateInteraction(state, action) {
      Object.assign(state, action.payload);
    },

    updateField(state, action) {
      const { field, value } = action.payload;
      state[field] = value;
    },

    resetInteraction() {
      return initialState;
    },
  },
});

export const { updateInteraction, updateField, resetInteraction } =
  interactionSlice.actions;

export default interactionSlice.reducer;
