import React from 'react';

function User({ user, onRemove, onToggle }) {
    return (
        <div>
            <b 
            style={{
                cursor:'pointer',
                color: user.active ? 'green':'black'}}
            onClick={()=> onToggle(user.id)}
            >
            {user.username}</b> 
            
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    )
}

function UserList({users, onRemove, onToggle}) {
    // const users = [
    //     {
    //         id:1,
    //         username: 'minji',
    //         email:'minji@test.com',
        
    //     },
    //     {
    //         id:2,
    //         username: 'kihyun',
    //         email:'kihyun@test.com',
        
    //     },
    //     {
    //         id:3,
    //         username: 'haeun',
    //         email:'haeun@test.com',
        
    //     }
    // ];

    return (
        <div>
            {/* <div>
                <b>{users[0].username}</b> <span> ({users[0].email}) </span>
            </div>
            <div>
                <b>{users[1].username}</b> <span>({users[1].email})</span>
            </div>
            <div>
                <b>{users[2].username}</b> <span>({users[2].email})</span>
            </div> */}
            {users.map((user) => (
                <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
            ))}
        </div>
        // 콜백함수의 두번쨰 파라미터는 무조건 key값으로 적용가능한가??
    )
}

export default UserList;