'use client';
import { useTodo } from '@/hooks/useTodo';
import TodoFilter from './TodoFilter';
import TodoItem from './TodoItem';
import { useState } from 'react';
import Error from './Error';

const TodoList = () => {
  const {
    fetchQuery: { data: todos, isError }
  } = useTodo();

  const [filter, setFilter] = useState<string>('all');
  const [updatedItem, setUpdatedItem] = useState<string | null>(null);

  const handleChangeFilter = (value: string) => {
    setFilter(value);
  };

  const handleChangeUpdatedItem = (id: string | null) => {
    setUpdatedItem(id);
  };

  if (isError) return <Error />;

  return (
    <div className="w-full flex flex-col gap-8">
      <TodoFilter
        items={[
          { id: 'all', label: '전체' },
          { id: 'active', label: '해야할 일' },
          { id: 'done', label: '완료한 일' }
        ]}
        selected={filter}
        handleChangeFilter={handleChangeFilter}
      />
      <div>
        {todos?.map((todo) => (
          <TodoItem
            key={todo.id}
            data={todo}
            filter={filter}
            isUpdated={updatedItem === todo.id}
            handleUpdated={handleChangeUpdatedItem}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
