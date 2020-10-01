import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
// import New from './New';
import Counter from './Counter';
import InputSample from './InputSample';

function App() {
  const name = 'react'
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }
  return (
    <>
      {/* 주석은 화면에 보이지 않습니다 */}
      <Wrapper>
        <Hello name="react" color="red" isSpecial/>
        <Hello color="pink"/>  
        {/* 이렇게 안으로 들어간 것들도 다 props 인데,
        이를 children 이라고 한다. */}
      </Wrapper>

      <Counter />

      <InputSample />
      
      {/* <div style={style}>name: {name}</div>
      <div className="gray-box"></div> */}
    </>
  );
}

export default App;
