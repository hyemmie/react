import React, { useState, useRef } from 'react';

function InputSample() {
  // const [text, setText] = useState('');
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });
  const nameInput = useRef();
  const { name, nickname } = inputs;

  const onChange = (e) => {
    // setText(e.target.value);
    const { name, value } = e.target
    
    // 리액트에서 객체를 업데이트 하려면 ? 우선 기존의 객체를 복사하자! 
    setInputs({
      ...inputs, // ... < 이건 spread 문법 : 기존의 객체를 복사한다, // 현재 상태의 내용이 여기로 온다
      [name]: value,
    });
  };

  const onReset = () => {
    // setText('');
    setInputs({
      name: '',
      nickname: '',
    });
    nameInput.current.focus();
  };

  return (
    // <div>
    //   <input onChange={onChange} value={text} />
    //   <button onClick={onReset}>초기화</button>
    //   <div>
    //     <b>값: </b>
    //     {text}
    //   </div>
    // </div>
    <div>
      <input 
        name="name"
        placeholder="이름" 
        onChange={onChange} 
        value={name} 
        ref={nameInput}
      />
      <input 
        name="nickname" 
        placeholder="닉네임" 
        onChange={onChange} 
        value={nickname} 
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  )
}

export default InputSample;