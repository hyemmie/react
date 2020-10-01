import React, { useState } from 'react';

function Counter() {
  // number라는 상태를 만들건데, 이 상태의 기본값은 0으로 하고 setNumber 함수를 통해 이 상태를 바꿔주겠다!
  const [number, setNumber] = useState(0);
  /* 비구조화 할당을 하지 않는다면??
      const numberState = useState(0);
      const number = numberState[0];
      const setNumber = numberState[1];
      useState 함수는 배열을 반환하는데 첫번째 요소는 현재 상태, 두번째 요소는 상태를 바꾸는 함수가 들어가 있음(이름은 나의 마음대로!)
   */
  const onIncrease = () => {
    // 상태를 바꿔줄 때 어떻게 바꿀지에 대한 로직을 함수로 전달할 수도 있음 : 업데이터 함수, 최적화와 관련이 있음
    setNumber(prevNumber => prevNumber + 12); // prevNumber라는 이름은 바꿔도 상관 없음
    setNumber(number + 1); // number가 number + 1으로 바뀜
  }
  const onDecrease = () => {
    setNumber(number - 1);
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  )
}

export default Counter;
