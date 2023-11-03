import { useState } from 'react';

const Counter = () =>{
    const [number, setNumber] = useState(0);
    //       ↑___________________________」
    //const state = useState();
    //const number = state[0];
    //const setNumber = state[1];
    //비구조화를 사용할 수 있다.(분해)

    return(
        <div>
            <h1>{number}</h1>
            <button type='button' onClick={() => setNumber(number - 1)}>-1</button>
            <button type='button' onClick={() => setNumber(number + 1)}>+1</button>
        </div>
    );

};

export default Counter;

//useState : 대여