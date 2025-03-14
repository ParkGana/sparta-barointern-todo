/* Todo 목록 가져오기 */
export const fetchTodos = async (): Promise<TodoType[]> => {
  try {
    const res = await fetch('http://localhost:4000/todos', {
      cache: 'no-store'
    });

    const todos: TodoType[] = await res.json();

    return todos;
  } catch (e: any) {
    throw new Error(e);
  }
};

/* Todo 생성 */
export const createTodo = async (title: string): Promise<void> => {
  try {
    await fetch('http://localhost:4000/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, completed: false })
    });
  } catch (e: any) {
    throw new Error(e);
  }
};
