import todoSlice from '../slices/todo.slice';
import { ThunkType } from '../redux.types';
import { TodoItemInterface } from '../types';
import { todoServices } from '../../services';

export const todoActions = todoSlice.actions;

export const fetchTodos = (): ThunkType => async (dispatch, getState) => {
  try {
    if (getState().todo.all.length === 0) {
      const response: TodoItemInterface[] = await todoServices.getAllTodos();
      dispatch(todoActions.setTodos(response));
    }
  } catch (e) {
    console.log(e);
  }
};

export const fetchParticularTodo = (todoId: number): ThunkType => async (dispatch) => {
  const response: TodoItemInterface = await todoServices.getParticularTodo(todoId);
  dispatch(todoActions.setSingle(response));
};

export const saveTodo = (todo: TodoItemInterface): ThunkType => async (dispatch) => {
  // call service
  dispatch(todoActions.addTodo(todo));
};
