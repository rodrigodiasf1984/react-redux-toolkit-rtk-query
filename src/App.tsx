import "./App.css";
import { useGetUsersQuery } from "./services/users";

function App() {
  const { data, error, isLoading, isSuccess, isError } =
    useGetUsersQuery("teste");

  return (
    <div className="App">
      <h1>Welcome to React Redux Toolkit RTK Query</h1>
      {isLoading && "Loading..."}
      {isError && error}
      {isSuccess &&
        data &&
        data.map((user: { id: number; name: string }) => (
          <h1 key={user.id}>{user.name}</h1>
        ))}
    </div>
  );
}

export default App;
