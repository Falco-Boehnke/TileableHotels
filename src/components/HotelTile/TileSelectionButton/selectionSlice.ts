import { createSlice } from '@reduxjs/toolkit'
import { HotelSelection } from '../../../types/hotelType';

export const btnSelectionSlice = createSlice({
    name: 'btnSelection',
    initialState: {
        selectedHotels: ([] as unknown as HotelSelection[]),
    },
    reducers: {
        toggleSelection: (state, action) => {
            const selectedHotels: HotelSelection[] = JSON.parse(JSON.stringify(state.selectedHotels));
            const newHotelSelection: HotelSelection = action.payload;

            console.log("PAYLOAD", action.payload);


            const storeIndex = selectedHotels.findIndex((hotel) => { return hotel.id === newHotelSelection.id })

            storeIndex !== -1 ? selectedHotels.splice(storeIndex, 1) : selectedHotels.push(newHotelSelection);

            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.selectedHotels = selectedHotels;
        },

    },
})

// Action creators are generated for each case reducer function
export const { toggleSelection } = btnSelectionSlice.actions

export default btnSelectionSlice.reducer