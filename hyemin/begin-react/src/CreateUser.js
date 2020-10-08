import React, { useEffect, useContext, useRef } from "react";
import { UserDispatch } from "./App";

const CreateUser = () => {
  const { dispatch, onChange, username, email } = useContext(UserDispatch);
  const nextId = useRef(4);

  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button
        onClick={() => {
          dispatch({
            type: "CREATE_USER",
            user: {
              id: nextId,
              username: username,
              email: email,
              active: true,
            },
          });
          nextId.current += 1;
        }}
      >
        등록
      </button>
    </div>
  );
};

export default React.memo(CreateUser);
