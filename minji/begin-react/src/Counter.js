import React, {useState} from 'react';

function Counter() {

    const [number, sayHo] = useState(5);
    //sayHo = setNumber(convention인듯), sayHo=setter 함수

    // const numberState = useState(5);
    // const number = numberState[0];
    // const sayHo = numberState[1]; --> 비구조화 할당 안한부분이 이해가 안간다.

    const onPlus = () => {
        sayHo(prevNumber => prevNumber + 2);
    }

    const onMinus = () => {
        sayHo(prevNumber => prevNumber - 2);
    }

    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onPlus}>+1</button>
            <button onClick={onMinus}>-1</button>
        </div>
    );
}

export default Counter;

