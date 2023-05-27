import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "iwal",
  prodi: "Teknik Informatika",
};

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setProdi: (state, action) => {
      state.prodi = action.payload;
    },
  },
});

export const { setName, setProdi } = userSlice.actions;
export const userReducer = userSlice.reducer;
