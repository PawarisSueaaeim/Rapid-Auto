import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type StateProp = {
    loading: boolean;
    clientMessage: string;
    listVehicles: iItemList[];
};

const initialStateValue: StateProp = {
    clientMessage: "",
    loading: false,
    listVehicles: [],
};

const getDataSlice = createSlice({
    name: "getDataStateValue",
    initialState: initialStateValue,
    reducers: {
        loadingData: (state, action) => {
            const {value, keyValue} = action.payload;
            switch (keyValue) {
                case "homePage": {
                    state.loading = value;
                    break;
                }
            }
        },
        getDataVehicles: (state, action) => {
            const {value, keyValue} = action.payload;
            switch (keyValue) {
                case "homePage": {
                    state.listVehicles = value;
                    break;
                }
            }
        },
        getClientMessage: (state, action) => {
            const {value, keyValue} = action.payload;
            switch (keyValue) {
                case "homePage": {
                    state.clientMessage = value;
                    break;
                }
            }
        }
    },
});

export const { 
    loadingData,
    getDataVehicles,
    getClientMessage
} = getDataSlice.actions;
export default getDataSlice.reducer;
export const getDataSelector = (state: RootState) => state.getDataSlice;
