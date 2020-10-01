import React, { useRef, useState, useMemo, useCallback } from 'react';
// import Hello from './Hello';
// import Wrapper from './Wrapper';
// import New from './New';
// import Counter from './Counter';
// import InputSample from './InputSample';
import UserList from './UserList'
import CreateUser from './CreateUser'

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  
  const { username, email } = inputs;
  
  const onChange = useCallback(
    e => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value
      });
    },
    [inputs]
  );

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);

  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers(users.concat(user));
    
    setInputs({
      username: '',
      email: ''
    });

    nextId.current += 1;
  }, [users, username, email])
  // 함수에서 사용하는 state 나 props 를 반드시 deps 안에 포함시켜야 한다
  

  const onRemove = useCallback(
    id => {
      setUsers(users.filter(user => user.id !== id));
    },
    [users]
  )

  const onToggle = useCallback(
    id => {
      setUsers(
        users.map(user =>
          user.id === id? {...user, active: !user.active} : user
        )
      )
    },
    [users]
  )

  const count = useMemo(() => countActiveUsers(users), [users]);
  // deps 배열 안의 내용이 바뀔 때 앞의 함수를 호출한다.

  return (
    <>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div>활성 사용자 수: {count}</div>
    </>
  )

}

export default App;


// function App() {
//   const name = 'react'
//   const style = {
//     backgroundColor: 'black',
//     color: 'aqua',
//     fontSize: 24,
//     padding: '1rem'
//   }
//   return (
//     <>
//       {/* 주석은 화면에 보이지 않습니다 */}
//       <Wrapper>
//         <Hello name="react" color="red" isSpecial/>
//         <Hello color="pink"/>  
//         {/* 이렇게 안으로 들어간 것들도 다 props 인데,
//         이를 children 이라고 한다. */}
//       </Wrapper>

//       <Counter />

//       <InputSample />
      
//       {/* <div style={style}>name: {name}</div>
//       <div className="gray-box"></div> */}
//     </>
//   );
// }

// export default App;
