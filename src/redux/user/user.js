import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    current: null,
    hiddenModal: true,
};

const userSlice = createSlice({
    name: "user",
    initialState: INITIAL_STATE,
    reducers: {
        setCurrentUser: (state, action) => {
            return {
                ...state,
                currentUser: action.payload,
            };
        },
        toggleModalHidden: (state) => {
            return {
                ...state,
                hiddenModal: !state.hiddenModal,
            };
        },
    },
});

export const { setCurrentUser, toggleModalHidden } = userSlice.actions;

export default userSlice.reducer;