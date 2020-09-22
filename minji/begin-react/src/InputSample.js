import React, {useState, useRef } from 'react';

function InputSample() {

    //1) const [text, setText] = useState('');
    //setText 는 setter 함수, 아래에서 setter 함수로 입력값을 state로 받아오는 것인가? 앞의 text를 지정해주는 함수.

    //2)
    const [inputs, setInputs] = useState({
        name:'',
        nickname:'',
    });

    const { name, nickname } = inputs;
    //위 props들을 객체 형태로 inputs에 담은건지?

    const nameInput = useRef();

    const onChange = (e) => {
        const { value, name } = e.target; //아래 input 에서 name과 value를 추출
        setInputs({
            ...inputs, // 기존의 inputs안에 있는 객체를 다 복사해서 가져온느것? name, nickname <- 이것들을?
            [name]: value //아래 input에서 받은 value(input 의 입력값)값을 name 키의 값으로 지정하는건가?
        })
    }

    const onReset = (e) => {
        setInputs({
            name:'',
            nickname:'',
        })
        nameInput.current.focus();
    };

    return(
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput}/>
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick = {onReset} >초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;