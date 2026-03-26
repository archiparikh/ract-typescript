// TypeScript interface for User data shape
interface User {
  name: string;
  age: number;
  email: string;
  role: 'admin' | 'editor' | 'viewer'; // union type restricts to specific strings
}

// TypeScript interface for component props
interface UserCardProps {
  user: User;
  onSelect?: (user: User) => void; // optional callback prop
}

// Role badge colours – Record type maps each role to a CSS colour string
const ROLE_COLORS: Record<User['role'], string> = {
  admin: '#e74c3c',
  editor: '#2980b9',
  viewer: '#27ae60',
};

function UserCard({ user, onSelect }: UserCardProps) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '1rem',
        borderRadius: '8px',
        cursor: onSelect ? 'pointer' : 'default',
      }}
      onClick={() => onSelect?.(user)}
    >
      <h3 style={{ margin: '0 0 0.25rem' }}>{user.name}</h3>
      <p style={{ margin: '0.1rem 0', color: '#555' }}>Age: {user.age}</p>
      <p style={{ margin: '0.1rem 0', color: '#555' }}>Email: {user.email}</p>
      <span
        style={{
          display: 'inline-block',
          marginTop: '0.5rem',
          padding: '0.2rem 0.6rem',
          borderRadius: '999px',
          background: ROLE_COLORS[user.role],
          color: '#fff',
          fontSize: '0.8rem',
          textTransform: 'capitalize',
        }}
      >
        {user.role}
      </span>
    </div>
  );
}

export default UserCard;
