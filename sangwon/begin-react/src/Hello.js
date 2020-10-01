import React from 'react';

// function Hello(props) {
//     return <div style={{ color: props.color}}>안녕하세요 {props.name} 님</div>
// }

function Hello({name, color, isSpecial}) { 
    // 비구조화 할당 시에는 건네준 props 의 이름과 같게 건네 받아야 한다
    return (
        <div style={{color}}>
            { isSpecial && <b>*</b> }
            안녕하세요 {name}
        </div>
    )
}

Hello.defaultProps = {
    name: "이름없음"
}
// default props 와 state 의 차이

export default Hello;
