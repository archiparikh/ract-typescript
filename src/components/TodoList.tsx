import { useState, useEffect } from 'react';

// TypeScript interface describes the shape of a Todo item
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function TodoList() {
  // useState typed with an array of Todo objects
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Learn TypeScript', completed: false },
    { id: 3, text: 'Build something awesome', completed: false },
  ]);

  // useState typed as a string
  const [inputValue, setInputValue] = useState<string>('');

  // useEffect runs after every render where `todos` changes
  useEffect(() => {
    const completed = todos.filter((t) => t.completed).length;
    document.title = `Todos – ${completed}/${todos.length} done`;
  }, [todos]);

  // Typed event handler
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addTodo = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    const newTodo: Todo = { id: Date.now(), text: trimmed, completed: false };
    setTodos((prev) => [...prev, newTodo]);
    setInputValue('');
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Typed keyboard event
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') addTodo();
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
      <h3>Todo List</h3>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Add a new todo…"
          style={{ flex: 1, padding: '0.4rem' }}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span style={{ flex: 1, textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>✕</button>
          </li>
        ))}
      </ul>
      <p style={{ marginTop: '0.75rem', fontSize: '0.875rem', color: '#666' }}>
        {todos.filter((t) => t.completed).length} / {todos.length} completed
      </p>
    </div>
  );
}

export default TodoList;
