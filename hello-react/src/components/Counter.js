import { Component } from 'react';

class Counter extends Component{

        state = {
            number : 0,
        }

        /*
        constructor(props){
            super(props);

        //초기값
        //props를 이용할 때는 App에 number={10} 추가한다. 
        
        this.state = {
            number : props.number,
        };
    }
    */

    render(){
        const {number} = this.state;

        return(
            <div>
                <h1>{number}</h1>
                <button 
                    type='button' 
                    onClick={() => {
                        this.setState({number : number + 1});
                        //상태값이 +1로 바껴있다.
                        //이벤트 함수에 정의된 this가 결정된다. -> Counter 객체
                }}>
                    +1
                </button>
                <button type='button' onClick={() => this.setState({number : number -1})}>-1</button>
            </div>
        );
    }
}

export default Counter;

//getOwnPropertyDescriptors -> 변경불가(수정x)
//freeze -> 속성이 바뀐다.    
//호출되지 않은 this -> window