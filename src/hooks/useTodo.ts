import { createTodo, deleteTodo, fetchTodos, updateTodo } from '@/services/todoService';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useTodo = () => {
  const queryClient = useQueryClient();

  const fetchQuery = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos
  });

  const createMutation = useMutation({
    mutationFn: createTodo,
    onMutate: async (title: string) => {
      await queryClient.cancelQueries({ queryKey: ['todos'] });

      const prevTodos = queryClient.getQueryData<TodoType[]>(['todos']);

      queryClient.setQueryData<TodoType[]>(['todos'], (prev = []) => [
        ...prev,
        { id: crypto.randomUUID(), title, completed: false }
      ]);

      return { prevTodos };
    },
    onError: (context: any) => {
      queryClient.setQueryData(['todos'], context.prevTodos);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    }
  });

  const updateMutation = useMutation({
    mutationFn: updateTodo,
    onMutate: async (updatedTodo: TodoType) => {
      await queryClient.cancelQueries({ queryKey: ['todos'] });

      const prevTodos = queryClient.getQueryData<TodoType[]>(['todos']);

      queryClient.setQueryData<TodoType[]>(['todos'], (prev = []) =>
        prev.map((todo) =>
          todo.id === updatedTodo.id ? { ...todo, title: updatedTodo.title, completed: updatedTodo.completed } : todo
        )
      );

      return { prevTodos };
    },
    onError: (context: any) => {
      queryClient.setQueryData(['todos'], context.prevTodos);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    }
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onMutate: async (id: string) => {
      await queryClient.cancelQueries({ queryKey: ['todos'] });

      const prevTodos = queryClient.getQueryData<TodoType[]>(['todos']);

      queryClient.setQueryData<TodoType[]>(['todos'], (prev = []) => prev.filter((todo) => todo.id !== id));

      return { prevTodos };
    },
    onError: (context: any) => {
      queryClient.setQueryData(['todos'], context.prevTodos);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    }
  });

  return { fetchQuery, createMutation, updateMutation, deleteMutation };
};
