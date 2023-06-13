import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  nohp: "",
  bootcamp: "dsgdsg",
  tmpatLahir: "",
  tglLahir: "",
  alamat: "",
  password: "",
  confirmPassword: "",
};

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setNoHp: (state, action) => {
      state.nohp = action.payload;
    },
    setBootcamp: (state, action) => {
      state.bootcamp = action.payload;
    },
    setTmpatLahir: (state, action) => {
      state.tmpatLahir = action.payload;
    },
    setTglLahir: (state, action) => {
      state.tglLahir = action.payload;
    },
    setAlamat: (state, action) => {
      state.alamat = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
  },
});

export const {
  setName,
  setEmail,
  setNoHp,
  setBootcamp,
  setTmpatLahir,
  setTglLahir,
  setAlamat,
  setPassword,
  setConfirmPassword,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
