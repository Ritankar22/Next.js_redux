import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../authSlice/authSlice";
import cmsSlice from "../cmsSLice/cmsSLice";


export const store = configureStore({
  reducer: {
    Auth: authSlice.reducer,
    Cms:cmsSlice.reducer
  },
});