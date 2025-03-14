import TodoCreate from '@/components/TodoCreate';
import TodoList from '@/components/TodoList';

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-5xl font-bold">TODO LIST</h1>
      <TodoCreate />
      <TodoList />
    </div>
  );
};

export default Home;
