import { useState } from 'react';

// TypeScript interface for component props
interface CounterProps {
  initialCount?: number; // optional prop with default value
  step?: number;         // how much to increment/decrement
  label?: string;
}

// Functional component with typed props
function Counter({ initialCount = 0, step = 1, label = 'Counter' }: CounterProps) {
  // useState with inferred type (number)
  const [count, setCount] = useState<number>(initialCount);

  const increment = () => setCount((prev) => prev + step);
  const decrement = () => setCount((prev) => prev - step);
  const reset = () => setCount(initialCount);

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
      <h3>{label}</h3>
      <p style={{ fontSize: '2rem', margin: '0.5rem 0' }}>{count}</p>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button onClick={decrement}>- {step}</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+ {step}</button>
      </div>
    </div>
  );
}

export default Counter;
