import React from 'react';

function Hello({name, isSpecial}) {
    return (
    <div>
        {isSpecial && <b>!!</b>}
        {/* 윗 줄은 = {isSpecial ? <b>이것은 무슨 태그 일까용</b> : null} */}
        안녕하세요 {name}
    </div>
    );
}

export default Hello;