import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "state",
    initialState: {
        userInfo: null
    },
    reducers: {
        signIn: (state, {payload}) => {
            state.userInfo = payload

            return state;
        },
        signOut: (state) => {
            state.userInfo = null
            return state;
        }
    }
})

export const {signIn} = authSlice.actions

export default authSlice.reducer