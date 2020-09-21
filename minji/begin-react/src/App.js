import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: 5,
  }

  return (
    <Wrapper>
      <>
      <Hello name={name} isSpecial={true}/>
      <Hello name="minji" />
      <Counter />
      </>
    </Wrapper>
  );
}

export default App;
