import React, { useState } from 'react';

function Counter() {
    const [number, setNumber] = useState(0)
    // 현재 상태, setter 함수
    // 배열 비구조화 할당으로 추출해줌 
    const onIncrease = () => {
        console.log('+1')
        // setNumber(number + 1) 과의 차이?
        setNumber(prevNumber => prevNumber + 1)
    }
    const onDecrease = () => {
        console.log('-1')
        setNumber(prevNumber => prevNumber - 1)
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            {/* onIncrease() 를 넣어주면 렌더링 시점에 호출까지 이뤄지기 때문에 하지 않는다 */}
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;