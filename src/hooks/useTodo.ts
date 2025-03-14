import { createTodo, fetchTodos, updateTodo } from '@/services/todoService';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useTodo = () => {
  const queryClient = useQueryClient();

  const fetchQuery = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos
  });

  const createMutation = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
      fetchQuery.refetch();
    }
  });

  const updateMutation = useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
      fetchQuery.refetch();
    }
  });

  return { fetchQuery, createMutation, updateMutation };
};
