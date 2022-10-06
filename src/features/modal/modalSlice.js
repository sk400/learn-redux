import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setOpen: (state) => {
            state.isOpen = !state.isOpen
        },

    }
})


export default modalSlice

export const { setOpen } = modalSlice.actions