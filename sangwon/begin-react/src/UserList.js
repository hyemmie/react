import React from 'react';

function User({user}) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  )
}

function UserList() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'publice@.com'
    },
    {
      id: 2,
      username: 'velopert',
      email: 'publice@.com'        
    }
    {
      id: 3,
      username: 'velopert',
      email: 'publice@.com'        
    }
  ];
  return (
    <div>
      {users.map((user, index) => (
        <User user={user} key={index} />
      ))}
    </div>
  )
}

export default UserList;