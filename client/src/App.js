import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = function() {
    return axios.get("/users").then((res) => {
      return setUsers(res.data.users);
    })
  }
  useEffect(() => {
    fetchUsers()
  }, [])
  
  console.log(users);
  const user = users.map((user) => {
    return (
      <ul key={user.id}>{user.email}</ul>
    )
  })
  return (
    <div className="App">
      <ul>{user}</ul>
    </div>
  );
}

export default App;
