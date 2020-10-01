import React, { useRef, useState, useMemo, useCallback } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }, []); // 이렇게 하면 onChange 함수는 inputs가 바뀔 때만 변경이 생기고 바뀌지 않으면 이전 값을 재사용 한다.

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false,
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false,
    }
  ]);



  const nextId = useRef(4); // 이 값이 바뀐다고 해서 컴포넌트가 리렌더링 될 필요가 없기 때문에 userRef()로 관리해줌. useState 사용하지 않고!!!
// 그리고 리렌더링 된다고 하더라도 변수값이 사라지지 않고 존재함. 근데 그럼 const 쓰면 안되나?

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    // setUsers([...users, user]);
    setUsers(users.concat(user));
    setInputs({ // 왜 여기서는 복사를 안해오는걸까????
      username: '',
      email: '',
    });
    console.log(nextId.current); // 4
    nextId.current += 1;
  }, [email, username]);

  const onRemove = useCallback((id) => {
    setUsers(users.filter(user => user.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setUsers(
      users.map(
        user => user.id === id
          ? { ...user, active: !user.active }
          : user 
      ));
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser 
        username={username} 
        email={email}
        onCreate={onCreate}
        onChange={onChange}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수 : {count}</div>
    </>
    )
}

export default App;
