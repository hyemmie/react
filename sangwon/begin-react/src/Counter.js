import React, { Component } from 'react';

class Counter extends Component {
    // constructor(props) {
    //     super(props) 
    //     this.state = {
    //         counter: 0
    //     }
    // //     this.handleIncrease = this.handleIncrease.bind(this)
    // //     this.handleDecrease = this.handleDecrease.bind(this)
    // }

    state = {
        counter: 0,
        fixed: 1
    }

    handleIncrease = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    handleDecrease = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
                <p>고정된 값: {this.state.fixed}</p>
                
            </div>
        )
    }
}

export default Counter;

// function reducer(state, action) {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1;
//         default:
//             return state;
//     }
// }

// function Counter() {
//     const [number, dispatch] = useReducer(reducer, 0)
//     // 현재 상태, setter 함수
//     // 배열 비구조화 할당으로 추출해줌 
//     const onIncrease = () => {
//         dispatch({ type: 'INCREMENT' })
//         // console.log('+1')
//         // // setNumber(number + 1) 과의 차이?
//         // setNumber(prevNumber => prevNumber + 1)
//     }
//     const onDecrease = () => {
//         dispatch({ type: 'DECREMENT' })
//         // console.log('-1')
//         // setNumber(prevNumber => prevNumber - 1)
//     }

//     return (
//         <div>
//             <h1>{number}</h1>
//             <button onClick={onIncrease}>+1</button>
//             {/* onIncrease() 를 넣어주면 렌더링 시점에 호출까지 이뤄지기 때문에 하지 않는다 */}
//             <button onClick={onDecrease}>-1</button>
//         </div>
//     );
// }
