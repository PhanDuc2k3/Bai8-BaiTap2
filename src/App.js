import React from 'react';

function App() {

  const numberList = [1, 2, 3, 4, 5];

 
  const user = {
    name: 'Name',
    age: 0,
    email: 'ex@gmail.com',
  };


  const userList = [
    {
      name: 'PhanDuc',
      age: 20,
      email: 'PhanDuc@gmail.com',
    },
    {
      name: 'MinhDuc',
      age: 19,
      email: 'MinhDuc@gmail.com',
    },
  ];


  const renderNumberList = () => {
    return (
      <ul>
        {numberList.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    );
  };

 
  const renderUser = () => {
    return (
      <div>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>
      </div>
    );
  };

 
  const renderUserList = () => {
    return (
      <ul>
        {userList.map((user) => (
          <li key={user.email}>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      {renderNumberList()}
      {renderUser()}
      {renderUserList()}
    </div>
  );
}

export default App;