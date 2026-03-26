import { useState } from 'react';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import UserCard from './components/UserCard';

// Sample users typed inline – demonstrates TypeScript array literal typing
const SAMPLE_USERS = [
  { name: 'Alice Smith', age: 30, email: 'alice@example.com', role: 'admin' as const },
  { name: 'Bob Jones', age: 25, email: 'bob@example.com', role: 'editor' as const },
  { name: 'Carol White', age: 22, email: 'carol@example.com', role: 'viewer' as const },
];

function App() {
  // useState typed as string | null – demonstrates union types with state
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>React + TypeScript Samples</h1>
      <p>
        This project demonstrates common React patterns written in TypeScript: typed props,
        interfaces, <code>useState</code>, <code>useEffect</code>, event handlers, and union types.
      </p>

      {/* ── Counter ── */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>1. Counter – <code>useState</code> &amp; typed props</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Counter label="Default (step 1)" />
          <Counter label="Step 5" step={5} initialCount={10} />
        </div>
      </section>

      {/* ── Todo List ── */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>2. Todo List – interfaces, <code>useState</code> &amp; <code>useEffect</code></h2>
        <TodoList />
      </section>

      {/* ── User Cards ── */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>3. User Cards – typed interfaces &amp; callback props</h2>
        {selectedUser && (
          <p style={{ color: '#2980b9' }}>Selected: <strong>{selectedUser}</strong></p>
        )}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {SAMPLE_USERS.map((user) => (
            <UserCard
              key={user.email}
              user={user}
              onSelect={(u) => setSelectedUser(u.name)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
