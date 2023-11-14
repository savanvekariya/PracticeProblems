import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Card from "./components/Card";

function App() {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(
      "https://random-data-api.com/api/v2/users"
    );
    setUsers([...users, data]);
  };

  const handleAddUser = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <button className="add-user" onClick={handleAddUser}>
        Add User
      </button>
      <div className="app">
        {users.map((user) => (
          <Card
            key={user.id}
            avatar={user.avatar}
            name={user.username}
            email={user.email}
            address={user.address}
          />
        ))}
      </div>
    </>
  );
}

export default App;
