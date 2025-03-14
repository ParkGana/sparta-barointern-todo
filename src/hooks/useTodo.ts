import { fetchTodos } from '@/app/actions/todo';
import { useQuery } from '@tanstack/react-query';

export const useTodo = () => {
  const fetchQuery = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos
  });

  return { fetchQuery };
};
