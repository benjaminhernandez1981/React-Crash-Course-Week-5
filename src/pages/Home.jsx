import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(data);
    console.log(data)
  }

  useEffect(() => {
    setTimeout(() => {
      fetchUsers();
    }, 500);
  }, []);
  const pixels = "2px";
  return;
  <div style={{ border: `${pixels} solid black` }}>
    <div>Id</div>
    <div>Name</div>
    <div>Email</div>
    <div>Username</div>
  </div>;
}
export default Home;
