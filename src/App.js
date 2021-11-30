import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const updateUserList = (name, age) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { id: Math.random().toString(), name: name, age: age },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={updateUserList} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
