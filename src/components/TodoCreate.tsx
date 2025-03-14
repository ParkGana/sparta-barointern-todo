'use client';
import { useTodo } from '@/hooks/useTodo';
import { useState } from 'react';

const TodoCreate = () => {
  const { createMutation } = useTodo();

  const [title, setTitle] = useState<string>('');

  const handleCreateTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      if (!title) return;

      createMutation.mutate(title);
      setTitle('');
    }
  };

  return (
    <input
      type="text"
      className="max-w-xl w-full border-2 border-gray-500 rounded-lg p-3"
      placeholder="해야할 일을 입력해주세요."
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      onKeyDown={handleCreateTodo}
    />
  );
};

export default TodoCreate;
