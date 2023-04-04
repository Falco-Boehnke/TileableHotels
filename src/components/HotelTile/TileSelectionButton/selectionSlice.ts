import { createSlice } from '@reduxjs/toolkit'

export const btnSelectionSlice = createSlice({
    name: 'btnSelection',
    initialState: {
        value: ["TESTING"],
    },
    reducers: {
        addButtonTemplates: (state, action) => {
            state.value.push(action.payload);
        },
        addSelection: (state, action) => {

            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value.push(action.payload);
        },

    },
})

// Action creators are generated for each case reducer function
export const { addSelection, addButtonTemplates } = btnSelectionSlice.actions

export default btnSelectionSlice.reducer