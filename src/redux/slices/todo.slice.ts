/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoInterface, TodoItemInterface } from '../types';

const initialTodoState: TodoInterface = {
  all: [],
  single: {
    userId: 0,
    id: 0,
    title: '',
    completed: false
  }
};

const todoSlice = createSlice({
  name: 'todo',
  initialState: initialTodoState,
  reducers: {
    setTodos(state, action: PayloadAction<TodoItemInterface[]>) {
      state.all = action.payload;
    },
    addTodo(state, action: PayloadAction<TodoItemInterface>) {
      state.all.push(action.payload);
    },
    setSingle(state, action: PayloadAction<TodoItemInterface>) {
      state.single = action.payload;
    }
  }
});

export default todoSlice;
