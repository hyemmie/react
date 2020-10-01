import React, { useEffect } from 'react';

const User = React.memo(function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user
  // useEffect(() => {
  //   console.log('컴포넌트가 화면에 나타남');
  //   // props로 받은 값을 컴포넌트의 state로 설정하는 작업
  //   // REST API 요청할 때도 여기서 작업 처리 가능
  //   // D3, Video.js 같은 라이브러리도 여기서 마운트 될 때 사용 가능
  //   // setInterval, setTimeout도 여기서 처리 가능
  //   // 이 함수들이 실행되는 시점은 ui가 화면에 나타난 이후임 따라서 dom에 바로 접근도 가능
  //   return () => {
  //     // clearInterval, clearTimeout 같은 작업들
  //     // 라이브러리 인스턴스 제거하는 작업
  //     // 클리너 함수... 일종의 뒷정리 함수?
  //     console.log('컴포넌트가 화면에서 사라짐');
  //   }
  // }, []);

  useEffect(() => {
    console.log('user 값이 설정됨');
    console.log(user); // user가 업데이트 된 직후에 실행이 되는 함수
    return () => {
      console.log('user 값이 바뀌기 전');
      console.log(user);
    }
  }, [user]); // deps 배열에 어떤 값을 넣으면 해당 값이 바뀌거나 나타날 때 마다 우리가 등록한 함수가 호출되고, 해당 값이 바뀌기 직전에는 클리너 함수가 호출이 된다.
              // deps에 넣어 줘야지만 함수에서 사용하는 user가 최신 상태를 유지하고 있음
  return (
    <div>
        <b 
          style={{
            color: active ? 'green' : 'black',
            cursor: 'pointer',
          }}
          onClick={() => onToggle(user.id)}
        >
          {username}
        </b>
        &nbsp;
        <span>({email})</span>
        <button onClick={() => onRemove(id)}>삭제</button> {/* onClick={onRemove(id)} : 렌더링 되는 시점에 삭제가 된다 */} 
    </div>
  );
});

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {
        users.map(
          (user) => (
          <User 
            user={user} 
            key={user.id} 
            onRemove={onRemove}
            onToggle={onToggle}
          />) // index로 넣는 것은 성능 향상에 영향을 미치지 않음 앵간하면 따로 만들어주자!
        )
      }
    </div>  
  )
}

export default React.memo(UserList);