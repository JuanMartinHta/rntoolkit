export interface TodoItemInterface {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoInterface {
  all: TodoItemInterface[];
  single: TodoItemInterface;
}
