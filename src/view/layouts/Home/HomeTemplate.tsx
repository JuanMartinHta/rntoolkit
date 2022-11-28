import React from 'react';
import {
  Button, FlatList, SafeAreaView, Text, TouchableOpacity
} from 'react-native';
import { useAppSelector } from '../../../redux/redux.hooks';
import { TodoItemInterface } from '../../../redux/types';

// import { SafeArea, Container, TextContainer } from '@AppComponents';

interface Props {
  onPressTodoItem: (todoId: number) => void,
  onPressAddTodo: (todo: TodoItemInterface) => void
}

const HomeTemplate: React.FC<Props> = (props: Props) => {
  const { onPressTodoItem, onPressAddTodo } = props;
  const allTodo = useAppSelector((state) => state.todo.all);

  return (
    <FlatList
      data={allTodo}
      ListHeaderComponent={(
        <Button
          title="Add"
          onPress={() => {
            onPressAddTodo({
              id: new Date().getTime(),
              title: `todo ${new Date().getTime()}`,
              userId: 8,
              completed: false
            });
          }}
        />
      )}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => onPressTodoItem(item.id)}
          style={{ marginHorizontal: 16, marginVertical: 16 }}
        >
          <Text>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default HomeTemplate;
