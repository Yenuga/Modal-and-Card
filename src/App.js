import { useState } from "react";
import "./App.css";
import AddUser from "./components/users/AddUser";
import UserList from "./components/users/userList";

function App() {
  const [userData, setUserData] = useState([["Hi", 12]]);
  const setUserslist = (data) => {
    setUserData(data);
  };
  return (
    <div>
      <AddUser setUserList={setUserslist} />
      <UserList users={userData} />
    </div>
  );
}

export default App;
