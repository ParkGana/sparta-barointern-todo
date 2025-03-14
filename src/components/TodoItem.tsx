import { useTodo } from '@/hooks/useTodo';
import { useState } from 'react';
import { FaTrashCan } from 'react-icons/fa6';
import { FaPenToSquare } from 'react-icons/fa6';
import { FaCheck } from 'react-icons/fa6';

interface TodoItemProps {
  data: TodoType;
  filter: string;
  isUpdated: boolean;
  handleUpdated: (id: string | null) => void;
}

const TodoItem = ({ data, filter, isUpdated, handleUpdated }: TodoItemProps) => {
  const { updateMutation } = useTodo();

  const [updatedTitle, setUpdatedTitle] = useState<string>(data.title);

  const handleChangeUpdated = () => {
    setUpdatedTitle(data.title);
    handleUpdated(data.id);
  };

  const handleUpdateTodo = (completed: boolean) => {
    updateMutation.mutate({ id: data.id, title: updatedTitle, completed });
    handleUpdated(null);
  };

  return (
    <>
      {(filter === 'all' || (filter === 'active' && !data.completed) || (filter === 'done' && data.completed)) && (
        <div className="flex justify-between py-3 border-b border-gray-300">
          {isUpdated ? (
            <>
              <input
                type="text"
                className="max-w-xl w-full border border-gray-500 focus:outline-none rounded-lg p-3"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
              />
              <div className="p-3">
                <FaCheck
                  size={20}
                  className="text-gray-700 cursor-pointer"
                  onClick={() => handleUpdateTodo(data.completed)}
                />
              </div>
            </>
          ) : (
            <>
              <p
                className={`runcate overflow-hidden border border-transparent cursor-pointer p-3 ${
                  data.completed && 'text-gray-500 line-through'
                }`}
                onClick={() => handleUpdateTodo(!data.completed)}
              >
                {data.title}
              </p>
              <div className="flex gap-2 p-3">
                <FaPenToSquare size={20} className="text-gray-700 cursor-pointer" onClick={handleChangeUpdated} />
                <FaTrashCan size={20} className="text-gray-700 cursor-pointer" />
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default TodoItem;
