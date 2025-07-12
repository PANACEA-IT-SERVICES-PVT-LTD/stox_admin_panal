import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    type: "",
 
  },

  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.type = action.payload?.type || action.payload;
     
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.type = "";
      state.config = {};
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
