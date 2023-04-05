import { configureStore } from "@reduxjs/toolkit";
import showData from "../features/showSlice";
import gitUser  from "../features/gitUserSlice";
import CounterSlice from "../features/CounterSlice";

export const store = configureStore({
    reducer: {show: showData,
    app: gitUser,
    counter: CounterSlice },
  });