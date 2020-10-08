import React, {useState, useRef} from 'react';

function InputSample() {
    // const [text, setText] = useState('')
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });
    const nameInput = useRef();

    const {name, nickname} = inputs;

    const onChange = (e) => {
        // 이건 매번 이벤트가 발생할 때 마다 업데이트
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        })
    }

    return ( 
        <div>
            <input 
                name="name" 
                placeholder="이름" 
                onChange={onChange}  
                value={name}
                ref={nameInput} />
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