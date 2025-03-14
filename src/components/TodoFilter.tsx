'use client';
import { useState } from 'react';

const TodoFilter = () => {
  const [category, setCategory] = useState<string>('all');

  const handleChangeCategory = (value: string) => {
    setCategory(value);
  };

  return (
    <div className="flex">
      <p
        className={`flex-1 text-center text-lg font-bold p-3 cursor-pointer hover:text-gray-900 ${
          category === 'all' ? 'border-b-2 border-gray-900 text-gray-900' : 'text-gray-300'
        }`}
        onClick={() => handleChangeCategory('all')}
      >
        전체
      </p>
      <p
        className={`flex-1 text-center text-lg font-bold p-3 cursor-pointer hover:text-gray-900 ${
          category === 'active' ? 'border-b-2 border-gray-900 text-gray-900' : 'text-gray-300'
        }`}
        onClick={() => handleChangeCategory('active')}
      >
        해야할 일
      </p>
      <p
        className={`flex-1 text-center text-lg font-bold p-3 cursor-pointer hover:text-gray-900 ${
          category === 'done' ? 'border-b-2 border-gray-900 text-gray-900' : 'text-gray-300'
        }`}
        onClick={() => handleChangeCategory('done')}
      >
        완료한 일
      </p>
    </div>
  );
};

export default TodoFilter;
