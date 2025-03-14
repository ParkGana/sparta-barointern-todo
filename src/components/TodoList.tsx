import TodoFilter from './TodoFilter';
import TodoItem from './TodoItem';

const TodoList = () => {
  return (
    <div className="w-full flex flex-col gap-8">
      <TodoFilter />
      <div>
        {[...Array(10)].map((_, index) => (
          <TodoItem key={index} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
