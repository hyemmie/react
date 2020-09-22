import React, { useRef, useState } from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './ CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username:'',
    email:'',
  });

  const { username, email } = inputs;
  const onChange = e => {
    const{name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
// setInputs 함수를 지정한다는게 이해가 안가여어 메서드로 지정하는건가?, 아 위에 변수지정한건 콜백함수가 아니라서 뒤에인자가 키값이 아니고 그냥 파라미터가 두개인건가요



  const [users, setUsers] = useState([
    {
        id:1,
        username: 'minji',
        email:'minji@test.com',
        active: true
    
    },
    {
        id:2,
        username: 'kihyun',
        email:'kihyun@test.com',
        active: false
    
    },
    {
        id:3,
        username: 'minji2',
        email:'minji2@test.com',
        active: false
    
    }
]);

  // const name = 'react';
  // const style = {
  //   backgroundColor: 'black',
  //   color: 'aqua',
  //   fontSize: 24,
  //   padding: 5,
  // }

  const nextId = useRef(4);
  const onCreate = () => {

    const user = {
      id: nextId.current,
      username,
      email
    };

    setUsers([...users, user]);
    // 이것두 마찬자기로 그냥  setUsers라는 변수 내에 위의 users 값들을 다 받아오는데 onCreate하면서 새로 생긴 user 객체를 함께 지정해주는것인가?

    setInputs({
      username:'',
      email:''
      });
    nextId.current += 1;
  }

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = id => {
    setUsers(users.map(user => user.id === id ? {...user, active: !user.active} : user ))
  }

  return (
    // <Wrapper>
    //   <>
    //   <Hello name={name} isSpecial={true}/>
    //   <Hello name="minji" />
    //   <Counter />
    //   </>
    // </Wrapper>
    // <InputSample />
    <>
    <CreateUser
      username={username}
      email={email}
      onChange={onChange}
      onCreate={onCreate}
      />
    <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </>
    //users라는 UserList의 props 값으로 위의 users배열 을 전달?
    // 단일 <InputSample />  컴포넌트만 있으면 동작하는데 왜 위 <Wrapper>컴포넌트와 함께하면 동작 안할까?
  );
}

export default App;
