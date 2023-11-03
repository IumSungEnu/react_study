import { useState } from "react";

const Message = () => {
    const [messages, setMessages] = useState(['메세지1', '메세지2', '메세지3']);
    const lis = messages.map((m, i) => <li key={i}>{m}</li>);
    const handleClick = () => {
        
        setMessages(messages.concat('메세지4')); //페이지 갱신 -> 기존 배열을 변경하지 않고, 새 배열을 반환합니다.
    }

    return(
        <>
        <ul>{lis}</ul>
        <button type='button' onClick={handleClick}>메세지4 추가</button>
        </>
    )
}

export default Message;

//자바스크립트 함수는 모두 객체이다. (객체의 불변성)