import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import selectionReducer from './../components/HotelTile/TileSelectionButton/selectionSlice'
export const store = configureStore({
  reducer: {
    btnSelection: selectionReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
