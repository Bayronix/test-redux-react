import { configureStore } from "@reduxjs/toolkit";
import { reducerInput } from "./reducerInput";
export const store = configureStore({
  reducer: reducerInput,
});
