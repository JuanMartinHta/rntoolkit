import React, { useEffect } from 'react';

import { TodoItemInterface } from '../../../redux/types';
import { useAppDispatch } from '../../../redux/redux.hooks';
import { fetchParticularTodo, fetchTodos, saveTodo } from '../../../redux/actions';

import HomeTemplate from './HomeTemplate';

const HomePage: React.FC = () => {
  // const { navigate, goBack } = useNavigation();
  const dispatch = useAppDispatch();

  const onPressTodoItem = (todoId: number) => {
    dispatch(fetchParticularTodo(todoId));
  };

  const onPressAddTodo = (todo: TodoItemInterface) => {
    dispatch(saveTodo(todo));
  };

  useEffect(() => {
    dispatch(fetchTodos());
  });

  return (
    <HomeTemplate
      onPressTodoItem={onPressTodoItem}
      onPressAddTodo={onPressAddTodo}
    />
  );
};

export default HomePage;
