import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import {RootState} from "../../app/store";

import GameEntity from "../../types/GameEntityType";
import default_entities from "../../data/default_entities";

const entitiesAdapter = createEntityAdapter<GameEntity>();
const initialState = entitiesAdapter.getInitialState();
const filledState = entitiesAdapter.upsertMany(initialState, default_entities);

export const entityesSlice = createSlice({
  name: 'game_entityes',
  initialState: filledState,
  reducers: {
    addEntity: (state, action) => {
      
      entitiesAdapter.addOne(state, action.payload)
    },
    updateEntityById: entitiesAdapter.updateOne
  }
});

export const { addEntity, updateEntityById } = entityesSlice.actions;

export const elementsSelectors =  entitiesAdapter.getSelectors((state:RootState) => state.game_entityes);

export const selectEntityes = (state:RootState) => state.game_entityes;

export default entityesSlice.reducer;