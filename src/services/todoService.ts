const API_URL = 'https://rattle-childlike-porkpie.glitch.me/todos';

/* Todo 목록 가져오기 */
export const fetchTodos = async (): Promise<TodoType[]> => {
  try {
    const res = await fetch(API_URL, {
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
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, completed: false })
    });
  } catch (e: any) {
    throw new Error(e);
  }
};

/* Todo 수정 */
export const updateTodo = async ({ id, title, completed }: TodoType): Promise<void> => {
  try {
    await fetch(`${API_URL}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, completed })
    });
  } catch (e: any) {
    throw new Error(e);
  }
};

/* Todo 삭제 */
export const deleteTodo = async (id: string): Promise<void> => {
  try {
    await fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    });
  } catch (e: any) {
    throw new Error(e);
  }
};
