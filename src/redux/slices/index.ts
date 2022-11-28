import { combineReducers } from '@reduxjs/toolkit';
import { TodoInterface } from '../types';
import todoSlice from './todo.slice';

export type SlicesStateType = {
  todo: TodoInterface
}
export const rootSlices = combineReducers<SlicesStateType>({
  todo: todoSlice.reducer
});

export type RootSlicesType = ReturnType<typeof rootSlices>;
