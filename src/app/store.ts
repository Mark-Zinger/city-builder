import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import gameGridReducer from "../features/game_grid";
import entityesReducer from "../features/entityes";

export const store = configureStore({
  reducer: {
    game_grid: gameGridReducer,
    game_entityes: entityesReducer
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
