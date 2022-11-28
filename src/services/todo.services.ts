import { todoApi } from '../api';
import { TodoItemInterface } from '../redux/types';

async function getAllTodos(): Promise<TodoItemInterface[]> {
  // const response = await todoApi.get('todos');
  // return response.data;

  return [
    {
      id: new Date().getTime(),
      title: `todo ${new Date().getTime()}`,
      userId: 1,
      completed: false
    }
  ];
}

async function getParticularTodo(todoId: number): Promise<TodoItemInterface> {
  // const response = await todoApi.get('todos');
  // return response.data.filter((todo: TodoItemInterface) => todo.id === todoId)[0];

  return {
    id: 1,
    title: 'test',
    userId: 1,
    completed: false
  };
}

export const todoServices = {
  getAllTodos,
  getParticularTodo
};
