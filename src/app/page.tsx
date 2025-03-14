import TodoCreate from '@/components/TodoCreate';
import TodoList from '@/components/TodoList';
import { fetchTodos } from '@/services/todoService';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Suspense } from 'react';

const Home = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-5xl font-bold">TODO LIST</h1>
        <TodoCreate />
        <Suspense fallback={<>Loading...</>}>
          <TodoList />
        </Suspense>
      </div>
    </HydrationBoundary>
  );
};

export default Home;
