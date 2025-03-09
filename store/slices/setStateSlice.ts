import { createReducer, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";


const initialState = {
    imageVehicles: [],
};

const setStateSlice = createSlice({
    name: "setStateSlice",
    initialState: initialState,
    reducers: {
        setState: (state, action) => {
            const {value, keyValue} = action.payload;

            switch (keyValue) {
                case "imageVehicles": {
                    state.imageVehicles = value;
                    break;
                }
            }
        },
    },
})

export const { setState} = setStateSlice.actions;
export default setStateSlice.reducer
export const setStateSelector = (state: RootState) => state.getDataSlice;