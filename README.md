# React + TypeScript Samples

A minimal project that demonstrates common **React** patterns written in **TypeScript**.
Bootstrapped with [Vite](https://vite.dev/).

## What's inside

| Component | Concepts covered |
|-----------|-----------------|
| `Counter` | `useState<number>`, typed props with defaults, event handlers |
| `TodoList` | TypeScript `interface`, `useState<Todo[]>`, `useEffect`, typed `onChange`/`onKeyDown` events |
| `UserCard` | Union types (`'admin' \| 'editor' \| 'viewer'`), `Record<K,V>`, optional callback prop |
| `App` | Composing components, `useState<string \| null>` (union with `null`) |

## Getting started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Type-check & build for production
npm run build

# Lint the source
npm run lint
```

## Key TypeScript concepts demonstrated

- **Interface** – describes the shape of props and data objects (`Todo`, `User`, `CounterProps` …)
- **Generic `useState`** – explicit type parameter: `useState<number>`, `useState<Todo[]>`, `useState<string | null>`
- **Union types** – restrict a string to a known set of values: `'admin' | 'editor' | 'viewer'`
- **`as const`** – narrows a string literal so TypeScript infers the union type correctly
- **Typed event handlers** – `React.ChangeEvent<HTMLInputElement>`, `React.KeyboardEvent<HTMLInputElement>`
- **Optional props** – `?` suffix on interface fields, default values via destructuring
- **`Record<K, V>`** – map a union key type to a value type
