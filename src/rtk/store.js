import { configureStore } from "@reduxjs/toolkit";
import  authSlice  from "./slices/authSlice";
import RealestateSlice from "./slices/RealestateSlice";
import AgentsSlice from "./slices/AgentsSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    Realestate: RealestateSlice,
    agents:AgentsSlice
  },
});
