import { useState } from "react";

const defaultValues = Array(10)
  .fill(0)
  .map((_, i) => ({
    id: i,
    name: `User ${i}`,
  }));

export default function App() {
  const [users, setUsers] = useState(defaultValues);

  const deleteHandler = (id: number) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  return (
    <div>
      {users.map((user) => (
        <button key={user.id} onClick={() => deleteHandler(user.id)}>
          {user.name}
        </button>
      ))}
    </div>
  );
}