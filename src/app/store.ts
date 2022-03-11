import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import gameGridReducer from "../features/game_grid";

export const store = configureStore({
  reducer: {
    game_grid: gameGridReducer,
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
