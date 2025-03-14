import { FaTrashCan } from 'react-icons/fa6';
import { FaPenToSquare } from 'react-icons/fa6';
import { FaCheck } from 'react-icons/fa6';

const TodoItem = () => {
  return (
    <div className="flex justify-between py-3 border-b border-gray-300">
      {false ? (
        <>
          <input type="text" className="max-w-xl w-full border border-gray-500 focus:outline-none rounded-lg p-3" />
          <div className="p-3">
            <FaCheck size={20} className="text-gray-700 cursor-pointer" />
          </div>
        </>
      ) : (
        <>
          <p className="truncate overflow-hidden border border-transparent cursor-pointer p-3">해야할 일</p>
          <div className="flex gap-2 p-3">
            <FaPenToSquare size={20} className="text-gray-700 cursor-pointer" />
            <FaTrashCan size={20} className="text-gray-700 cursor-pointer" />
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
