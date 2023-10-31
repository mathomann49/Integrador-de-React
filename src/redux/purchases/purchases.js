import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    purchases: null,
    loading: false,
    error: null,
};

const purchasesSlice = createSlice({
    name: "purchases",
    initialState: INITIAL_STATE,
    reducers: {
        createPurchaseFail: (state = INITIAL_STATE, action) => {
            return {
                ...state,
                error: action.payload,
            };
        },
        fetchPurchasesSuccess: (state, action) => {
            return {
                ...state,
                loading: false,
                error: null,
                purchases: [...action.payload],
            };
        },
        fetchPurchasesFail: (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        },
        fetchPurchasesStart: (state) => {
            return {
                ...state,
                loading: true,
            };
        },
        clearError: (state) => {
            return {
                ...state,
                error: null,
            };
        },
        clearPurchases: (state) => {
            return {
                ...state,
                purchases: null,
            };
        }
    }
});

export const {
    createPurchaseFail,
    fetchPurchasesSuccess,
    fetchPurchasesFail,
    fetchPurchasesStart,
    clearError,
    clearPurchases
} = purchasesSlice.actions;

export default purchasesSlice.reducer;