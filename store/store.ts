import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import getDataSlice from "./slices/getDataSlice";

export const store = configureStore({
    reducer: {
        getDataSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();