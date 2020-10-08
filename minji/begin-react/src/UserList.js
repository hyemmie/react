import React, { useEffect } from "react";

const User = React.memo(function User({ user }) {
  // useEffect(() => {
  //   console.log("user 값이 설정됨");
  //   console.log(user);
  //   return () => {
  //     console.log("user 가 바뀌기 전..");
  //     console.log(user);
  //   };
  // }, [user]);
  // console.log("renderUser");

  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black",
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button onClick={() => {}}>삭제</button>
    </div>
  );
});

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
        />
      ))}
    </div>
  );
}

export default React.memo(UserList);
