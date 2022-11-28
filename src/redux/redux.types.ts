import { ThunkAction, AnyAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export type ThunkType = ThunkAction<void, RootState, unknown, AnyAction>;
