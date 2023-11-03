import { Component } from 'react';
import PropTypes from 'prop-types';


class MyComponent extends Component { //정적 클래스이기 때문에 정적(static)을 사용할 수 있다.

    //값이 없어도 기본값이 나오게 하는것 defaultProps
    //기본값
    static defaultProps = {  
        name : '(이름 없음)',
    }

    //자료형 설정 
    static propTypes = {
        favoriteNumber : PropTypes.number.isRequired, 
        //favoriteNumber를 number로 설정함으로써 숫자만 입력하도록 한다. 
        //isRequired : 필수여부
    }

    render() { //설정한 속성의 내용이 담겨있다.
        const { name, favoriteNumber, children } = this.props; 
        //.props : 속성
        //읽기 전용으로 사용(수정할 수 없다 -> 외부에서 가져오기 때문에 참고만 할수 있다.)
        
        return (
            <>
                <div>나의 멋진 첫번째 컴포넌트</div>
                <div>{name}님 반갑습니다.</div>
                <div>좋아하는 숫자 : {favoriteNumber}</div>
                <div>내용 : {children}</div>
            </>
        );
    }

}

export default MyComponent;

//실제로 많이 사용함